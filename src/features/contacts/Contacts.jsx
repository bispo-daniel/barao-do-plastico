import { Place, CallRounded, WhatsApp, Instagram } from "@mui/icons-material";

import { ContactCard } from "@/components";

function Contacts() {
  return (
    <main className="w-full min-h-[80vh] flex justify-center flex-wrap flex-col text-center p-3 mb-12">
      <div className="cards w-full flex flex-wrap gap-3 justify-center">
        <ContactCard
          link="https://wa.me/5511958090337?text=Olá!"
          title="WhatsApp"
          text="+55 (11) 95809-0337"
          btnIcon={<WhatsApp />}
          btnText="Enviar Mensagem"
        />
        <ContactCard
          link="tel:+5511958090337"
          title="Telefone"
          text="+55 (11) 95809-0337"
          btnIcon={<CallRounded />}
          btnText="Ligar"
        />
        <ContactCard
          link="https://www.instagram.com/tobellafitness_oficial/"
          title="Instagram"
          text="@tobellafitness_oficial"
          btnIcon={<Instagram />}
          btnText="Seguir"
        />
        <ContactCard
          link="https://maps.app.goo.gl/4PRThXpVeZHgmsid6"
          title="Endereço"
          text="Rua Peixoto Werneck, 106"
          extra="Artur Alvim - SP"
          btnIcon={<Place />}
          btnText="Abrir Google Maps"
        />
      </div>

      <div className="map"></div>
    </main>
  );
}

export default Contacts;
