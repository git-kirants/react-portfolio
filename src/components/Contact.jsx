import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h2 className="mt-6 text-center text-4xl font-semibold">Contact</h2>
        <h6 className="my-2 text-center text-1xl font-bold text-neutral-500">Feel Free to reach out to me for any questions or opportunities!</h6>
        <div className="text-center tracking-tighter">
        <p className="my-1">
            {CONTACT.address}
        </p>
        <p>
            {CONTACT.phoneNo}
        </p>
        <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
        
    </div>
  )
}

export default Contact