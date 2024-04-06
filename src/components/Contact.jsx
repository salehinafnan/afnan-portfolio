import { CONTACT } from "../constants";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

function Contact() {
  return (
    <div className="pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <div className="my-4 flex justify-center items-center">
          <AiOutlineHome className="mr-2" />
          <p>{CONTACT.address}</p>
        </div>
        <div className="my-4 flex justify-center items-center">
          <AiOutlinePhone className="mr-2" />
          <p>{CONTACT.phoneNo}</p>
        </div>
        <div className="my-4 flex justify-center items-center">
          <AiOutlineMail className="mr-2" />
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
