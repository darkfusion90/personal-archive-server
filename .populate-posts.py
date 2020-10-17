import click
import requests
from random import randint
import json

mock_post_url = 'https://jsonplaceholder.typicode.com/posts'
user_id = ''


def self_server_url():
    return 'http://localhost:8000/api/users/{}/posts'.format(user_id)


def get_posts():
    response = requests.get(mock_post_url)
    return response.json()


def get_post_link(post):
    return '{url}/{id}'.format(url=mock_post_url, id=post['id'])


def random_words(limit: int):
    words = []
    with open('.words.txt') as file:
        lines = file.readlines()
        count_lines = len(lines)

        while True:
            line = lines[randint(0, count_lines - 1)].strip()

            if len(line) > 4 and len(line) < 8:
                words.append(line)
            if len(words) > limit:
                break

    return words


def random_tags(words):
    max_tags = randint(2, min(len(words), 8))
    tags = []

    for _ in range(max_tags):
        random_index = randint(0, len(words) - 1)
        tags.append(words[random_index])

    return tags


def print_post(post):
    print(json.dumps(post, indent=4), end='\n\n')


def mock_post(post):
    return {
        'title': post['title'],
        'comment': post['body'],
        'tags': post['tags'],
        'link': get_post_link(post)
    }


def create_post(post):
    mocked = mock_post(post)
    requests.post(self_server_url(), data=mocked)


@click.command()
@click.option('--limit', '-l', help='Limit number of posts to this', default=10, required=False)
@click.option('--userId', '-u', help='Use provided userId', default='5f71fb75fa3b7436935d643a', required=False)
def main(limit, userid):
    global user_id
    user_id = userid

    posts = get_posts()
    words = random_words(limit * 10)

    for post in posts[:limit]:
        post['tags'] = random_tags(words)
        print_post(post)
        create_post(post)


main()
