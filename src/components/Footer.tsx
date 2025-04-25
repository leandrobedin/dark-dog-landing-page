
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'});
  };
  
  return (
    <footer className="w-full py-10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <img 
            src="https://i.ibb.co/GvG8xYx3/dog03333.webp" 
            alt="Cachorro calmo e tranquilo" 
            className="w-full max-w-xs rounded-xl shadow-lg mb-8"
          />
          
          <Button 
            className="shine-btn text-base md:text-lg py-6 px-8 rounded-xl mb-12"
            onClick={scrollToPricing}
          >
            QUERO MUDAR A VIDA DO MEU CÃO AGORA
          </Button>
        </div>
      
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-gradient">CÃO SEM STRESS™</div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Cão Sem Stress™. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
