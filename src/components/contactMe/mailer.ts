import { endpoints } from "../../applicationConfig";

interface IContactMeData {

}

const SendToMail = async (data: IContactMeData) => {
  if (! endpoints.mailerEndpoint)
    throw new Error('mailer.ts not completed.');

  const response = await fetch(endpoints.mailerEndpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    redirect: 'error',
    body: JSON.stringify(data)
  });
  return response.status;
}

export default SendToMail;
