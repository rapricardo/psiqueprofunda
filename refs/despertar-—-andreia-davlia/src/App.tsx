/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles, Target, Layers, Users, Quote } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/20 selection:text-accent">
      {/* SEÇÃO 1 — Hero */}
      <section className="section-spacing bg-bg-primary overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="label-uppercase">DESPERTAR · O RETORNO CONSCIENTE</span>
              <h1 className="text-5xl md:text-7xl leading-tight mb-8">
                Você não está perdida.<br />
                <span className="serif-italic">Está desconectada de si.</span>
              </h1>
              <p className="text-lg md:text-xl text-text-body mb-10 max-w-[540px] leading-relaxed">
                Se você construiu estabilidade externa, mas sente ausência de vitalidade interna, talvez não precise de mais metas. Precise de clareza.
              </p>
              <button className="btn-primary group">
                Quero recuperar minha clareza
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] lg:aspect-square"
            >
              <img 
                src="https://picsum.photos/seed/andreia/800/1000?grayscale" 
                alt="Andreia Davlia" 
                className="w-full h-full object-cover rounded-sm desaturate-[0.3] brightness-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-multiply rounded-sm"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — Identificação / Dor */}
      <section className="section-spacing bg-bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn} className="max-text-width">
            <h2 className="text-4xl md:text-5xl mb-16">Talvez você reconheça isso.</h2>
            <div className="space-y-8 text-left max-w-[500px] mx-auto">
              {[
                "Vive em função das expectativas dos outros.",
                "Toma decisões para manter equilíbrio, não para viver a sua verdade.",
                "Sente cansaço emocional mesmo quando tudo parece \"bem\".",
                "Perdeu contato com o que realmente deseja."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-detail/10 pb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <p className="text-lg text-text-body">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl md:text-3xl serif-italic text-detail mt-16">
              Isso não é fraqueza. É desconexão.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 3 — Transformação (Antes/Depois) */}
      <section className="section-spacing bg-bg-primary">
        <div className="container mx-auto px-6">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl text-center mb-20">Autoria emocional.</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              {...fadeIn}
              className="p-12 bg-white/50 border border-detail/5 rounded-sm"
            >
              <h3 className="text-xl uppercase tracking-widest text-text-muted mb-8">Reatividade</h3>
              <ul className="space-y-4 text-text-muted">
                <li>Culpa recorrente.</li>
                <li>Autossabotagem sutil.</li>
                <li>Excesso de racionalização.</li>
              </ul>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="p-12 bg-accent/5 border border-accent/10 rounded-sm"
            >
              <h3 className="text-xl uppercase tracking-widest text-text-primary font-bold mb-8">Clareza nas decisões</h3>
              <ul className="space-y-4 text-text-primary text-lg">
                <li>Limites saudáveis.</li>
                <li>Presença real.</li>
                <li>Confiança silenciosa.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — Método (4 Pilares) */}
      <section className="section-spacing bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 {...fadeIn} className="text-4xl md:text-5xl mb-4">Estrutura — Método em 4 pilares.</motion.h2>
            <motion.p {...fadeIn} className="text-text-muted text-lg">Não é imersão emocional desorganizada. É processo consciente.</motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Consciência", desc: "Reconhecer padrões emocionais que operam no automático." },
              { title: "Desconstrução", desc: "Questionar crenças limitantes que guiam suas decisões." },
              { title: "Integração", desc: "Unir razão e emoção sem anular nenhuma das duas." },
              { title: "Autoria", desc: "Decidir com maturidade emocional e presença." }
            ].map((pilar, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-sm relative overflow-hidden group hover:bg-accent/5 transition-colors"
              >
                <span className="absolute -top-4 -right-4 text-8xl font-serif text-accent/10 group-hover:text-accent/20 transition-colors">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{pilar.title}</h3>
                <p className="text-text-body leading-relaxed relative z-10">{pilar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — Como Funciona */}
      <section className="section-spacing bg-bg-primary">
        <div className="container mx-auto px-6">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl text-center mb-20">Como acontece.</motion.h2>
          <div className="max-w-2xl mx-auto space-y-12">
            {[
              { icon: Users, text: "8 encontros ao vivo" },
              { icon: Target, text: "Exercícios estruturados entre encontros" },
              { icon: Layers, text: "Material complementar exclusivo" },
              { icon: Sparkles, text: "Grupo fechado e intimista" },
              { icon: Check, text: "Acesso por período determinado" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="flex items-center gap-8 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-detail/20 rounded-full group-hover:border-accent transition-colors">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-xl text-text-body">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — Sobre a Mentora */}
      <section className="section-spacing bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <span className="label-uppercase">SOBRE A MENTORA</span>
              <h2 className="text-4xl md:text-5xl mb-8">Andreia Davlia</h2>
              <div className="space-y-6 text-lg text-text-body leading-relaxed">
                <p className="font-bold text-text-primary">Psicóloga clínica, especialista em processos emocionais e desenvolvimento humano.</p>
                <p>Há mais de 15 anos acompanha mulheres em processos de reconexão emocional. Desenvolveu o método Despertar a partir da prática clínica e experiência estruturada.</p>
                <p className="serif-italic text-detail text-xl pt-4">Sem promessas mágicas. Sem atalhos.</p>
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="order-1 lg:order-2"
            >
              <img 
                src="https://picsum.photos/seed/mentora/800/1000?grayscale" 
                alt="Andreia Davlia" 
                className="w-full h-full object-cover rounded-sm desaturate-[0.5]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — Depoimento */}
      <section className="section-spacing bg-bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <Quote className="w-16 h-16 text-accent/20 mx-auto mb-12" />
            <blockquote className="text-3xl md:text-5xl serif-italic text-text-primary leading-tight mb-12">
              "Eu não precisava mudar minha vida inteira. Precisava mudar minha relação comigo."
            </blockquote>
            <cite className="text-lg text-text-muted not-italic">— Mariana Silva, Advogada</cite>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-serif text-accent/5 select-none -z-0">
          "
        </div>
      </section>

      {/* SEÇÃO 8 — CTA Final / Oferta */}
      <section className="section-spacing bg-bg-secondary border-t border-detail/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl mb-8">Despertar — O Retorno Consciente.</h2>
            <p className="text-lg text-text-body mb-12">
              8 encontros ao vivo · Material estruturado · Grupo fechado · Acesso determinado
            </p>
            <div className="mb-12">
              <span className="text-text-muted text-sm block mb-2">Investimento</span>
              <span className="text-4xl md:text-5xl font-serif text-text-primary">R$ 2.497,00</span>
              <p className="text-text-muted text-sm mt-4">Vagas limitadas para garantir profundidade do processo.</p>
            </div>
            <button className="btn-primary group text-lg px-12 py-6">
              Quero começar meu processo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 9 — Frase de Fechamento */}
      <section className="section-spacing bg-bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-6xl md:text-8xl leading-none mb-12">
              Clareza não é destino.<br />
              <span className="serif-italic">É decisão.</span>
            </h2>
            <div className="w-16 h-px bg-detail/30 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-text-primary text-white/80">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm">© 2026 Andreia Davlia · Despertar</p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
