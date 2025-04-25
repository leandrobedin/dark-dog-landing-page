
import React from 'react';
import { X, Check } from 'lucide-react';

const ProblemsSection = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="section-wrapper">
        <h2 className="section-title">
          👊🏼 Cansado de ter um cachorro descontrolado?
        </h2>
        
        <div className="glass-card p-6 md:p-10 rounded-2xl mb-16 opacity-0 animate-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl hover:bg-dog-primary/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-16 w-16 mb-4 bg-dog-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-dog-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Latidos Incessantes</h3>
              <p className="text-gray-400">Seu cachorro late como se visse fantasma o dia inteiro?</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:bg-dog-primary/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-16 w-16 mb-4 bg-dog-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-dog-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Destruição Total</h3>
              <p className="text-gray-400">Destrói móveis, sapatos, paredes e até sua paciência?</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:bg-dog-primary/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-16 w-16 mb-4 bg-dog-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-dog-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Zero Obediência</h3>
              <p className="text-gray-400">Parece que tá possuído e não obedece nem gritando?</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">CALMA, MISERÁVEL. TEM SOLUÇÃO.</h3>
          </div>
        </div>
        
        <div className="glass-card p-6 md:p-10 rounded-2xl opacity-0 animate-slide-in [animation-delay:0.2s]">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            🚨 Apresentando: <span className="text-gradient">CÃO SEM STRESS™</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
            O Protocolo de 7 Dias Que Vai Salvar Seu Lar
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
            <div className="flex-1 glass-card p-6 rounded-xl border border-red-500/20 bg-red-900/10">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <X className="h-5 w-5 text-red-500" />
                <span>Métodos Tradicionais</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Adestradores caros que cobram fortuna</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Medicamentos com efeitos colaterais</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Métodos que levam meses para funcionar</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Teorias complicadas que não funcionam</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 glass-card p-6 rounded-xl border border-dog-primary/20 bg-dog-primary/10">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-dog-primary" />
                <span>Cão Sem Stress™</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-dog-primary mt-1 flex-shrink-0" />
                  <span>Método rápido, simples e direto</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-dog-primary mt-1 flex-shrink-0" />
                  <span>Resultados em apenas 7 dias (ou menos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-dog-primary mt-1 flex-shrink-0" />
                  <span>Sem medicamentos, apenas técnicas naturais</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-dog-primary mt-1 flex-shrink-0" />
                  <span>Apenas 15-20 minutos por dia de aplicação</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
