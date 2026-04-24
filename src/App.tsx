/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Gamepad2, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Zap,
  ShieldCheck,
  Search,
  Target,
  Layers,
  Bot,
  Palette,
  BookOpen,
  Presentation,
  Anchor,
  ClipboardCheck,
  Cpu
} from "lucide-react";

// --- Components ---

const Reveal = ({ children, delay = 0 }: { children: ReactNode, delay?: number, key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Section = ({ children, className = "", id = "", bg = "bg-transparent" }: { children: ReactNode, className?: string, id?: string, bg?: string, key?: any }) => (
  <section id={id} className={`section-gap ${bg} ${className}`}>
    <div className="container-custom">
      {children}
    </div>
  </section>
);

const Card = ({ title, description, result, icon: Icon, className = "" }: { title: string, description: string, result?: string, icon?: any, className?: string, key?: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`premium-card h-full flex flex-col ${className}`}
  >
    {Icon && <Icon className="w-5 h-5 text-brand-blue mb-4 shrink-0" />}
    <h3 className="text-[13px] font-bold text-brand-blue mb-2 uppercase tracking-tight leading-tight">{title}</h3>
    <p className="text-[12px] text-slate-600 leading-relaxed mb-4 flex-grow">{description}</p>
    {result && (
      <div className="mt-auto pt-3 border-t border-slate-50">
        <p className="text-[10px] font-bold text-brand-accent/70 uppercase tracking-tighter">{result}</p>
      </div>
    )}
  </motion.div>
);

const StatCard = ({ value, label, sub = "", large = false }: { value: string, label: string, sub?: string, large?: boolean, key?: any }) => (
  <div className={`bg-white border border-slate-100 flex flex-col justify-center shadow-sm rounded-2xl transition-all duration-300 hover:shadow-md ${large ? 'p-8 ring-1 ring-brand-blue/5' : 'p-5'}`}>
    <div className="flex items-baseline gap-1">
      <span className={`${large ? 'text-4xl' : 'text-2xl'} font-black text-brand-blue tracking-tighter`}>{value}</span>
      {sub && <span className={`${large ? 'text-xs' : 'text-[10px]'} font-bold text-slate-400 uppercase ml-0.5`}>{sub}</span>}
    </div>
    <p className={`${large ? 'text-[11px]' : 'text-[9px]'} uppercase tracking-widest text-slate-500 mt-2 font-bold leading-tight`}>{label}</p>
  </div>
);

const StepCard = ({ number, title, description }: { number: string, title: string, description: string, key?: any }) => (
  <div className="relative p-7 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-brand-blue/20 transition-all duration-300">
    <div className="text-4xl font-black text-brand-blue/5 absolute top-4 right-6 leading-none select-none">{number}</div>
    <h3 className="text-sm font-bold text-brand-blue mb-2 uppercase tracking-tight">{title}</h3>
    <p className="text-[12px] text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Tag = ({ text }: { text: string, key?: any }) => (
  <span className="bg-white border border-slate-200 px-3.5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-tight text-slate-600 hover:border-brand-blue hover:text-brand-blue transition-all cursor-default shadow-sm">
    {text}
  </span>
);

// --- Content ---

export default function App() {
  const handleTelegramContact = () => {
    const deepLink = "tg://resolve?domain=BRV_Roman&text=Здравствуйте!%20Хочу%20обсудить%20вашу%20помощь%20для%20нашей%20компании.";
    const fallbackLink = "https://t.me/BRV_Roman";
    window.location.href = deepLink;
    setTimeout(() => {
      if (document.visibilityState === 'visible') {
        window.open(fallbackLink, '_blank', 'noopener,noreferrer');
      }
    }, 1000);
  };

  const images = {
    hero: "https://raw.githubusercontent.com/pobedaavr-sys/karierakons/main/IMG_0106.jpg",
    meeting: "https://raw.githubusercontent.com/pobedaavr-sys/BrVB2BConsultant/218c9e9e126ba487e78636c713436c4668cf1ba5/%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B0%D1%8F%20%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B0%20%D1%81%20%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%BE%D0%BC.png",
    facilitation: "https://raw.githubusercontent.com/pobedaavr-sys/BrVB2BConsultant/218c9e9e126ba487e78636c713436c4668cf1ba5/%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B0%D1%8F%20%D1%84%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D1%8F.png"
  };

  return (
    <div className="font-sans selection:bg-brand-blue selection:text-white bg-brand-gray text-brand-ink overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container-custom h-14 flex items-center justify-between">
          <div className="text-lg font-extrabold tracking-tighter text-brand-blue">Роман Беляев</div>
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-500">
            <a href="#who-am-i" className="hover:text-brand-blue transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-brand-blue transition-colors">Компетенции</a>
            <a href="#process" className="hover:text-brand-blue transition-colors">Алгоритм</a>
            <a href="#results" className="hover:text-brand-blue transition-colors">Результаты</a>
          </div>
          <button 
            onClick={handleTelegramContact}
            className="bg-brand-blue text-white px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-accent transition-all shadow-lg shadow-brand-blue/10"
          >
            Связаться
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-28 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue mb-5 bg-brand-blue/5 px-4 py-1.5 rounded-full">
                Роман Беляев — стратегический партнёр собственника
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8 text-brand-blue tracking-tighter text-balance">
                Навожу порядок в людях, процессах, продукте и управлении
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl font-light">
                Помогаю компаниям разобраться, где бизнес теряет деньги, время и управляемость, а затем собрать рабочую систему изменений — от диагностики и структуры до автоматизации, AI и внедрения.
              </p>
              
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
                  <button 
                    onClick={handleTelegramContact}
                    className="bg-brand-blue text-white px-10 py-4.5 rounded-2xl font-bold text-[11px] uppercase tracking-[0.15em] hover:bg-brand-accent transition-all shadow-2xl shadow-brand-blue/20 flex items-center justify-center gap-3 group"
                  >
                    Связаться со мной
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={handleTelegramContact}
                    className="bg-white text-brand-blue border border-slate-200 px-10 py-4.5 rounded-2xl font-bold text-[11px] uppercase tracking-[0.15em] hover:bg-slate-50 transition-all flex items-center justify-center"
                  >
                    Оставить запрос
                  </button>
                </div>
                <div className="flex items-center gap-4 border-l-2 border-brand-blue/10 pl-6 h-10">
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wide">
                    Не даю советы, а создаю рабочие решения и результат.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(26,54,93,0.25)] border-[8px] border-white"
            >
              <img 
                src={images.hero} 
                alt="Роман Беляев" 
                width="800"
                height="1000"
                className="absolute inset-0 w-full h-full object-cover object-top contrast-[1.05] grayscale brightness-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white shadow-xl">
                <div className="text-[9px] font-black uppercase tracking-widest text-brand-blue">STRATEGY PARTNER</div>
              </div>
            </motion.div>
            <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-6 rounded-3xl shadow-2xl max-w-[200px] hidden xl:block">
              <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed opacity-90">Управленец-практик и внешний усилитель бизнеса</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Block: Who Am I + First Image */}
      <Section id="who-am-i" bg="bg-white" className="border-y border-slate-100">
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 group">
                <img 
                  src={images.meeting} 
                  alt="Рабочая встреча с собственником" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-blue/5 rounded-full -z-10 blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-slate-100 rounded-full -z-10 blur-3xl"></div>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-blue uppercase tracking-tight">Обо мне и моей роли в бизнесе</h2>
                <div className="w-16 h-1 bg-brand-blue/20 rounded-full"></div>
              </div>
              
              <div className="space-y-5 text-sm md:text-base leading-relaxed text-slate-700">
                <p className="font-bold text-brand-blue/90">
                  Роман Беляев — стратегический партнёр собственника, который помогает компаниям переходить от ручного управления к более зрелой и устойчивой системе.
                </p>
                <p>
                  Я подключаюсь тогда, когда бизнесу нужен не просто совет, а человек, который поможет собрать управленческий контур: структуру, ключевые функции, процессы, продуктовую логику, обучение команды, продажи, автоматизацию и внешний контур.
                </p>
                <p className="text-slate-500 italic">
                  Моя сильная сторона — видеть бизнес целиком: от целей собственника и логики продукта до людей, процессов, денег, подрядчиков, автоматизации и внедрения.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Proof Block */}
      <Section className="bg-slate-50/30">
        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-brand-blue uppercase tracking-tight mb-4 text-balance">Почему меня выбирают собственники компаний</h2>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em] max-w-xl mx-auto">Не про абстрактную экспертизу, а про масштаб, практику и реальные результаты.</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Briefcase, t: "20+ лет в управлении", d: "Опыт работы топ-менеджером и руководителем в компаниях из разных сфер." },
            { icon: Anchor, t: "18 лет в консалтинге", d: "Практика сопровождения собственников и компаний в вопросах роста, структуры и управления." },
            { icon: TrendingUp, t: "4 компании из кризиса", d: "За последние 5 лет помог вывести компании на стабильные показатели по обороту и чистой прибыли." },
            { icon: ClipboardCheck, t: "193+ млн ₽ тендеров", d: "Реальный деловой результат, подтверждённый выигранными проектами." },
            { icon: Layers, t: "18+ продуктов и 7 брендов", d: "Опыт запуска, упаковки и продвижения новых направлений с нуля." },
            { icon: Search, t: "1600+ разборов", d: "Большая практика на реальных запросах предпринимателей и руководителей." }
          ].map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Card icon={card.icon} title={card.t} description={card.d} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Expertise Section */}
      <Section id="services" bg="bg-white" className="border-y border-slate-100">
        <Reveal>
          <div className="mb-14 flex items-end justify-between border-b border-slate-200 pb-5">
            <h2 className="text-2xl font-bold text-brand-blue uppercase tracking-tight">Чем могу быть полезен</h2>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold hidden sm:block italic">Focus Areas</span>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Reveal delay={0.1}><Card icon={Target} title="Стратегия и управление" description="Диагностика бизнеса, логика изменений и сборка управленческой системы." /></Reveal>
          <Reveal delay={0.2}><Card icon={Users} title="HR и команда" description="Найм, роли, профили должностей, адаптация, развитие и кадровый резерв." /></Reveal>
          <Reveal delay={0.3}><Card icon={Palette} title="Продажи и продукт" description="Доупаковка продукта, customer development, усиление коммерческой модели." /></Reveal>
          <Reveal delay={0.4}><Card icon={ShieldCheck} title="Контроль качества" description="Стандарты, инструкции, адаптация и воспроизводимость результата." /></Reveal>
          <Reveal delay={0.5}><Card icon={GraduationCap} title="Внутренняя академия" description="Обучение под задачи бизнеса, развитие сотрудников и передача знаний." /></Reveal>
          <Reveal delay={0.6}><Card icon={Cpu} title="IT, автоматизация и AI" description="Оцифровка пути клиента, ТЗ, выбор подрядчиков и контроль внедрения." /></Reveal>
          <Reveal delay={0.7}><Card icon={Globe} title="PR / GR / внешний контур" description="Площадки, мероприятия, деловые связи, отраслевой и госконтур." /></Reveal>
          <Reveal delay={0.8}><Card icon={Gamepad2} title="Стратегические форматы" description="Бизнес-игры для обучения, переговорной практики и проработки задач." /></Reveal>
        </div>
      </Section>

      {/* How I Work Section */}
      <Section id="process">
        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-blue uppercase tracking-tight">Как я подключаюсь к бизнесу</h2>
            <div className="w-12 h-1 bg-brand-blue mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Reveal delay={0.1}><StepCard number="01" title="Диагностика" description="Разбираюсь, где компания теряет время, деньги и управляемость." /></Reveal>
          <Reveal delay={0.2}><StepCard number="02" title="Логика изменений" description="Определяю, что нужно пересобрать, а что действительно стоит автоматизировать." /></Reveal>
          <Reveal delay={0.3}><StepCard number="03" title="Постановка" description="Собираю требования, роли, процессы, подрядчиков и логику внедрения." /></Reveal>
          <Reveal delay={0.4}><StepCard number="04" title="Запуск" description="Сопровождаю внедрение, обучение и контроль до рабочего результата." /></Reveal>
        </div>
      </Section>

      {/* Strategic Formats Section */}
      <Section id="formats" bg="bg-brand-gray/30" className="border-y border-slate-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-blue uppercase tracking-tight">Игровые и стратегические форматы</h2>
                <div className="w-16 h-1 bg-brand-blue/20 rounded-full"></div>
              </div>
              <div className="space-y-6 text-sm md:text-base leading-relaxed text-slate-700">
                <p>
                  Провожу авторские игровые и стратегические сессии для обучения, переговорной практики и проработки бизнес-задач.
                </p>
                <p>
                  Использую эти форматы не как развлечение, а как рабочий инструмент для включения команды, обсуждения сложных ситуаций, развития навыков и поиска решений по реальным задачам бизнеса.
                </p>
              </div>
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm border-l-4 border-l-brand-blue">
                <p className="text-[11px] font-bold text-brand-blue uppercase tracking-widest leading-loose">
                  За 2025–2026 годы провёл <span className="text-brand-accent">76 таких сессий</span>, в которых участвовало более 1100 человек из разных компаний и городов России.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src={images.facilitation} 
                alt="Рабочая фасилитация" 
                className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700" 
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Business & IT Link - Accent Block */}
      <Section className="py-0">
        <div className="bg-brand-blue text-white rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 leading-tight">Связываю бизнес и IT в одну рабочую систему</h2>
              <div className="space-y-6 text-sm md:text-lg font-light text-slate-300 leading-relaxed">
                <p>Я выступаю связующим звеном между собственником, бизнесом, подрядчиками и IT-командой.</p>
                <p>Помогаю понять, какие процессы действительно нужно автоматизировать, где AI даст реальную пользу, как правильно сформулировать задачу и проконтролировать реализацию.</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-3">
              {[
                "оценка бизнес-процессов",
                "карта автоматизации",
                "постановка задачи (ТЗ)",
                "выбор технологических подрядчиков",
                "контроль внедрения и обучения"
              ].map((point, i) => (
                <Reveal key={i} delay={0.1 * i}>
                  <div className="flex items-center gap-5 bg-white/10 p-4.5 rounded-2xl border border-white/10 hover:bg-white/15 transition-all group">
                    <CheckCircle2 size={18} className="text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[12px] font-bold uppercase tracking-widest">{point}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Investment & Internal Blocks (Side by Side editorial style) */}
      <Section className="pb-0">
        <div className="grid lg:grid-cols-2 gap-20">
          <Reveal>
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-blue uppercase tracking-tight">Инвестиционный трек</h2>
                <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                  Подготовка компании к привлечению капитала: прозрачность, логика и инвестиционная упаковка проекта.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Подготовка к инвестициям", "Упаковка проекта", "Инвестиционная логика", "Поиск инвестора"].map((item, i) => (
                  <div key={i} className="bg-brand-gray border border-slate-100 p-4 rounded-2xl text-center flex items-center justify-center min-h-[60px]">
                    <div className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-blue uppercase tracking-tight">Внутренний контур</h2>
                <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                  Создание корпоративных баз знаний и внутренних академий для масштабирования системы управления.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Базы знаний", "Академии", "Развитие команды", "Культурный код"].map((item, i) => (
                  <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm text-center flex items-center justify-center min-h-[80px] hover:shadow-md transition-shadow">
                    <div className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Niches & Useful When */}
      <Section bg="bg-white" className="border-y border-slate-100">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-12">
            <Reveal>
              <h2 className="text-xl font-bold text-brand-blue uppercase tracking-tight mb-10">С какими бизнесами работал</h2>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "недвижимость", "строительство", "медицина", "образование", "услуги", 
                  "лингвистический бизнес", "транспорт", "реклама", "колл-центр", 
                  "гостиницы", "рестораны", "производство", "мебель", "ЖКХ", 
                  "бухгалтерские услуги", "IT", "товары для детей", "ювелирные изделия", 
                  "салоны красоты", "эко-проекты"
                ].map((niche, i) => (
                  <Tag key={i} text={niche} />
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-12 mt-10">
            <Reveal>
              <h2 className="text-xl font-bold text-brand-blue uppercase tracking-tight mb-10 text-center">Когда я особенно полезен</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  "много хаоса и нет понятной логики управления",
                  "собственник держит слишком многое на себе",
                  "нужно понять, что пересобрать, а что автоматизировать",
                  "бизнес упёрся в рост и не хватает управляемости",
                  "нужно усилить продажи, продукт или команду",
                  "нужен сильный внешний партнёр, а не просто подрядчик"
                ].map((text, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex items-start gap-5 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} className="text-brand-blue" />
                    </div>
                    <p className="text-[12px] text-slate-700 font-medium leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
        <div className="container-custom relative z-10">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center flex flex-col gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-snug">
                  Когда нужен сильный внешний партнёр для изменений
                </h2>
                <p className="text-sm md:text-base font-medium text-slate-400 leading-relaxed md:px-24 opacity-80">
                  Если в компании накопился управленческий хаос, рост упёрся в старую модель или нужно собрать систему изменений — давайте обсудим вашу задачу в Telegram.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <button 
                  onClick={handleTelegramContact}
                  className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-brand-gray transition-all flex items-center justify-center gap-3 shadow-2xl shadow-white/5 group"
                >
                  Связаться со мной
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleTelegramContact}
                  className="border border-slate-700 text-white px-12 py-5 rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl"
                >
                  Оставить запрос
                </button>
              </div>

              <div className="pt-24 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                <div className="flex flex-col items-center md:items-start gap-2">
                  <span className="text-white">© 2026 Роман Беляев</span>
                  <span className="opacity-50 text-[8px] tracking-widest">Стратегический партнёр собственника</span>
                </div>
                <div className="flex gap-12">
                  <a 
                    href="https://t.me/BRV_Roman" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors flex items-center gap-3 group"
                  >
                    <Bot size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}
