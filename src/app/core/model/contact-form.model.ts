import { EmailValidator } from "@angular/forms";

export interface ContactForm {
    email: string;
    subject: string;
    message: string;
}