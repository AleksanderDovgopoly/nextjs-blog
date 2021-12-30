import ContactForm from "../components/contact-form/contact-form";
import {Fragment} from "react";
import Head from "next/head";

function ContactPage() {
    return (
        <Fragment>
            <Head>
                <title>Mask` Blog - Contact Me</title>
                <meta
                    name="description"
                    content="Send me your message"
                />
            </Head>
            <ContactForm />
        </Fragment>
    )
}

export default ContactPage