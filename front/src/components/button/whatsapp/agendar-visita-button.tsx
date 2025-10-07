'use client';

interface AgendarVisitaButtonProps {
  propertyName: string;
}

export default function AgendarVisitaButton({
  propertyName,
}: AgendarVisitaButtonProps): JSX.Element {
  const handleClick = (): void => {
    const message = `Olá! Gostaria de agendar uma visita para conhecer o empreendimento ${propertyName}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5555999531120?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
      Agendar Visita
    </button>
  );
}
