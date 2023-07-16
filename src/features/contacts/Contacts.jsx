import ContactCard from '../../components/contactCard/ContactCard.jsx'

function Contacts() {
    return (
        <main className='w-full min-h-[80vh] flex justify-center flex-wrap flex-col text-center p-3 mb-12'>

            <div className="cards w-full flex flex-wrap gap-3 justify-center">
                <ContactCard title="WhatsApp" text="(11) 90000-0000" btnText="Enviar Mensagem"/>
                <ContactCard title="Telefone" text="(11) 0000-0000" btnText="Ligar"/>
                <ContactCard title="E-mail" text="contact.example@example.com" btnText="Enviar E-Mail"/>
                <ContactCard title="Facebook" text="Store's page" btnText="Seguir"/>
                <ContactCard title="Instagram" text="@virtual" btnText="Seguir"/>
                <ContactCard title="Youtube" text="Store's channel" btnText="Inscreva-se"/>
                <ContactCard title="Endereço" text="22 Acacia avenue" btnText="Abrir Google Maps"/>
            </div>

            <div className="map">

            </div>
        </main>
    )
}

export default Contacts