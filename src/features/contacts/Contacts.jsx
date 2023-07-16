import ContactCard from '../../components/contactCard/ContactCard.jsx'

import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlaceIcon from '@mui/icons-material/Place';

function Contacts() {
    return (
        <main className='w-full min-h-[80vh] flex justify-center flex-wrap flex-col text-center p-3 mb-12'>

            <div className="cards w-full flex flex-wrap gap-3 justify-center">
                <ContactCard link='https://wa.me/5511918658056?text=Olá!' title="WhatsApp" text="+55 (11) 91865-8056" btnIcon={<WhatsAppIcon />} btnText="Enviar Mensagem"/>
                <ContactCard link='tel:+5511918658056' title="Telefone" text="+55 (11) 91865-8056" btnIcon={<CallRoundedIcon />} btnText='Ligar'/>
                <ContactCard link='mailto:favelamind@gmail.com' title="E-mail" text="contact.example@example.com" btnIcon={<EmailRoundedIcon />} btnText="Enviar E-Mail"/>
                <ContactCard link='https://www.facebook.com/' title="Facebook" text="Store's page" btnIcon={<FacebookIcon />} btnText="Seguir"/>
                <ContactCard link='https://www.instagram.com/' title="Instagram" text="@virtual" btnIcon={<InstagramIcon />} btnText="Seguir"/>
                <ContactCard link='https://www.youtube.com' title="Youtube" text="Store's channel" btnIcon={<YouTubeIcon />} btnText="Inscreva-se"/>
                <ContactCard link='https://www.maps.google.com/' title="Endereço" text="22 Acacia avenue" btnIcon={<PlaceIcon />} btnText="Abrir Google Maps"/>
            </div>

            <div className="map">

            </div>
        </main>
    )
}

export default Contacts