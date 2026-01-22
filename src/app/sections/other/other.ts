import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SectionTitle } from "../../components/section-title/section-title";
import { SectionSubtitle } from "../../components/section-subtitle/section-subtitle";
import { LanguageIcon } from "../../components/language-icon/language-icon";
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-other',
  imports: [SectionTitle, SectionSubtitle, LanguageIcon, ReactiveFormsModule, CommonModule],
  templateUrl: './other.html',
  styleUrl: './other.css',
  host: {
    class: "w-full h-auto flex flex-col justify-start items-center mt-10"
  }
})
export class Other {
   currentDescription: string = 'All of my certificates of competitons and courses I have.';
   contactForm: FormGroup;
   showToast: boolean = false;
   toastMessage: string = '';
   isSubmitting: boolean = false;
   toastType: 'success' | 'error' = 'success';

  // EmailJS configuration - You need to replace these with your actual credentials from emailjs.com
  private EMAILJS_SERVICE_ID = 'service_fa00aen';
  private EMAILJS_TEMPLATE_ID = 'template_vgkk4gd';
  private EMAILJS_PUBLIC_KEY = 'TN2jTJYGWP-0TZ62K';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  setDescription(text: string) {
    this.currentDescription = text;
  }

  resetDescription() {
    this.currentDescription = 'All of my certificates of competitons and courses I have.';
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;
      
      try {
        // Send email using EmailJS
        const templateParams = {
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'hajruuudin@gmail.com'
        };

        await emailjs.send(
          this.EMAILJS_SERVICE_ID,
          this.EMAILJS_TEMPLATE_ID,
          templateParams,
          this.EMAILJS_PUBLIC_KEY
        );
        
        // Success - reset form and show success toast
        this.contactForm.reset();
        this.toastType = 'success';
        this.displayToast('Message sent successfully! Thank you for reaching out.');
      } catch (error) {
        console.error('Email sending failed:', error);
        this.toastType = 'error';
        this.displayToast('Failed to send message. Please try again later.');
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.toastType = 'error';
      this.displayToast('Please fill in all fields correctly.');
    }
  }

  displayToast(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 4000);
  }
}
