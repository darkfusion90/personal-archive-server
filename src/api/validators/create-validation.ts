import validationHandler from "./validation-handler";

export default function createValidation(validationChain: any) {
    return [validationChain, validationHandler]
}