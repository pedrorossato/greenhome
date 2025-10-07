'use client';

interface MaisInformacoesButtonProps {
  propertyName: string;
}

export default function MaisInformacoesButton({
  propertyName,
}: MaisInformacoesButtonProps): JSX.Element {
  const handleClick = (): void => {
    const message = `Olá! Gostaria de receber mais informações sobre o empreendimento ${propertyName}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5555999531120?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
    >
      Mais Informações
    </button>
  );
}
