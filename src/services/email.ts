/**
 * Represents the data required to send an email.
 */
export interface EmailData {
  /**
   * The sender's name.
   */
  name: string;
  /**
   * The sender's email address.
   */
  email: string;
  /**
   * The message content.
   */
  message: string;
}

/**
 * Asynchronously sends an email.
 *
 * @param emailData The data required to send the email.
 * @returns A promise that resolves when the email is sent successfully.
 */
export async function sendEmail(emailData: EmailData): Promise<void> {
  // TODO: Implement this by calling an API.

  return Promise.resolve();
}
