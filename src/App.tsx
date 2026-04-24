/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  BarChart3, 
  Users, 
  Settings, 
  Cpu, 
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
  Rocket,
  Layers,
  Bot,
  LineChart,
  HardHat,
  Stethoscope,
  Building2,
  Utensils,
  Smartphone,
  Diamond,
  Heart,
  Palette,
  Truck,
  BookOpen,
  Presentation,
  Anchor,
  Clock,
  Layout,
  BarChart,
  ClipboardCheck,
  Play
} from "lucide-react";

// --- Components ---

const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`section-gap ${className}`}>
    <div className="container-custom">
      {children}
    </div>
  </section>
);

const Card = ({ title, description, result, icon: Icon, className = "" }: { title: string, description: string, result?: string, icon?: any, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
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

const StatCard = ({ value, label, sub = "" }: { value: string, label: string, sub?: string, key?: any }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-100 flex flex-col justify-center shadow-sm">
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-black text-brand-blue tracking-tighter">{value}</span>
      {sub && <span className="text-[10px] font-bold text-slate-400 uppercase ml-0.5">{sub}</span>}
    </div>
    <p className="text-[9px] uppercase tracking-widest text-slate-500 mt-1.5 font-bold leading-tight">{label}</p>
  </div>
);

const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="relative p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
    <div className="text-3xl font-black text-brand-blue/5 absolute top-4 right-6 leading-none select-none">{number}</div>
    <h3 className="text-sm font-bold text-brand-blue mb-2 uppercase tracking-tight">{title}</h3>
    <p className="text-[12px] text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Tag = ({ text }: { text: string, key?: any }) => (
  <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-tight text-slate-600 hover:border-brand-blue hover:text-brand-blue transition-colors cursor-default">
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

  return (
    <div className="font-sans selection:bg-brand-blue selection:text-white bg-brand-gray text-brand-ink">
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
            className="bg-brand-blue text-white px-4 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-brand-accent transition-all ring-offset-2 hover:ring-2 ring-brand-blue/10"
          >
            Связаться
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-28 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4 bg-brand-blue/5 px-3 py-1 rounded-full">
                Роман Беляев — стратегический партнёр собственника
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-brand-blue tracking-tighter text-balance">
                Навожу порядок в людях, процессах, продукте и управлении
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl font-light">
                Помогаю компаниям разобраться, где бизнес теряет деньги, время и управляемость, а затем собрать рабочую систему изменений — от диагностики и структуры до автоматизации, AI и внедрения.
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button 
                    onClick={handleTelegramContact}
                    className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-accent transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-2"
                  >
                    Связаться со мной
                    <ArrowRight size={14} />
                  </button>
                  <button 
                    onClick={handleTelegramContact}
                    className="bg-white text-brand-blue border border-slate-200 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center"
                  >
                    Оставить запрос
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wide border-l-2 border-slate-200 pl-4">
                  Не просто даю рекомендации, а перевожу задачу в понятный план, подрядчиков, внедрение и результат.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white"
            >
              <img 
                src="https://raw.githubusercontent.com/pobedaavr-sys/karierakons/main/IMG_0106.jpg" 
                alt="Роман Беляев" 
                className="absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.1] grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white shadow-lg">
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-0.5">B2B STRATEGY PARTNER</div>
                <div className="text-[9px] text-slate-500 font-bold uppercase">Управленец-практик</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Trust Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <StatCard value="20+" label="управленческого опыта" sub="лет" />
          <StatCard value="18" label="работы в консалтинге" sub="лет" />
          <StatCard value="1600+" label="разборов с предпринимателями" />
          <StatCard value="4" label="выведены из кризиса на стабильные показатели" sub="компании" />
        </div>
      </Section>

      {/* New Block: Who Am I */}
      <Section id="who-am-i" className="bg-white border-y border-slate-100 pb-12">
        <div className="max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold text-brand-blue uppercase tracking-tight mb-8">Кто я и почему меня стоит слушать</h2>
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-5 text-sm md:text-base leading-relaxed text-slate-700 font-medium">
              <p>
                Роман Беляев — стратегический партнёр собственника, который помогает компаниям переходить от ручного управления к более зрелой и устойчивой системе.
              </p>
              <p>
                Я подключаюсь тогда, когда бизнесу нужен не просто совет, а человек, который поможет собрать управленческий контур: структуру, ключевые функции, процессы, продуктовую логику, обучение команды, продажи, автоматизацию и внешний контур.
              </p>
              <p className="opacity-75">
                Моя сильная сторона — видеть бизнес целиком: от целей собственника и логики продукта до людей, процессов, денег, подрядчиков, автоматизации и внедрения.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              {[
                { icon: Target, text: "стратегический партнёр собственника" },
                { icon: Zap, text: "практическое усиление управления" },
                { icon: ShieldCheck, text: "от диагностики до внедрения" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-brand-gray p-3 rounded-xl border border-slate-100">
                  <item.icon size={16} className="text-brand-blue shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-tight text-brand-blue">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Proof Block */}
      <Section className="bg-slate-50/50">
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-brand-blue uppercase tracking-tight mb-2">Почему мой опыт имеет вес для бизнеса</h2>
          <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest pl-1">Не про абстрактную экспертизу, а про управленческий масштаб и реальные результаты.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card 
            icon={Briefcase}
            title="20+ лет в управлении" 
            description="Опыт работы топ-менеджером и руководителем в компаниях из разных сфер."
          />
          <Card 
            icon={Anchor}
            title="18 лет в консалтинге" 
            description="Практика сопровождения собственников и компаний в вопросах роста, структуры, продаж и управления."
          />
          <Card 
            icon={TrendingUp}
            title="4 компании выведены из кризиса" 
            description="За последние 5 лет помог вывести компании на стабильные показатели по обороту и чистой прибыли."
          />
          <Card 
            icon={ClipboardCheck}
            title="193+ млн ₽ выигранных тендеров" 
            description="Реальный деловой результат, а не просто консультирование."
          />
          <Card 
            icon={Layers}
            title="18+ новых продуктов и 7 брендов" 
            description="Опыт запуска, упаковки и продвижения новых направлений."
          />
          <Card 
            icon={Search}
            title="1600+ разборов с бизнесом" 
            description="Большая практика на реальных запросах предпринимателей и руководителей."
          />
        </div>
      </Section>

      {/* Expertise Section (Overhaul) */}
      <Section id="services">
        <div className="mb-10 flex items-end justify-between border-b border-slate-200 pb-3">
          <h2 className="text-xl font-bold text-brand-blue uppercase tracking-tight">Чем могу быть полезен</h2>
          <span className="text-[9px] text-slate-400 uppercase tracking-widest font-extrabold hidden sm:block">8 Направлений компетенций</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card 
            icon={Target}
            title="Стратегия и управление" 
            description="Диагностика бизнеса, логика изменений и сборка управленческой системы."
          />
          <Card 
            icon={Users}
            title="HR и команда" 
            description="Найм, роли, профили должностей, адаптация, развитие и кадровый резерв."
          />
          <Card 
            icon={Palette}
            title="Продажи и продукт" 
            description="Доупаковка продукта, customer development, переговорный контур и усиление коммерческой модели."
          />
          <Card 
            icon={ShieldCheck}
            title="Контроль качества" 
            description="Стандарты, инструкции, адаптация и воспроизводимость результата."
          />
          <Card 
            icon={GraduationCap}
            title="Внутренняя академия" 
            description="Обучение под задачи бизнеса, развитие сотрудников и передача внутренних знаний."
          />
          <Card 
            icon={Cpu}
            title="IT, автоматизация и AI" 
            description="Оцифровка пути клиента и пути продукта, точки автоматизации, ТЗ, подрядчики и внедрение."
          />
          <Card 
            icon={Globe}
            title="PR / GR / внешний контур" 
            description="Площадки, мероприятия, деловые связи, отраслевой и государственный контур."
          />
          <Card 
            icon={Gamepad2}
            title="Бизнес-игры и стратегические форматы" 
            description="Форматы для обучения, переговорной практики и проработки бизнес-задач."
          />
        </div>
      </Section>

      {/* How I Work Section */}
      <Section id="process" className="bg-white border-y border-slate-100">
        <div className="mb-10">
          <h2 className="text-xl font-bold text-brand-blue uppercase tracking-tight">Как я подключаюсь к бизнесу</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StepCard 
            number="01"
            title="Диагностика"
            description="Разбираюсь, где компания теряет время, деньги и управляемость."
          />
          <StepCard 
            number="02"
            title="Сборка логики изменений"
            description="Определяю, что нужно пересобрать, что усилить, а что действительно стоит автоматизировать."
          />
          <StepCard 
            number="03"
            title="Проектная постановка"
            description="Собираю требования, роли, процессы, подрядчиков, инструменты и логику внедрения."
          />
          <StepCard 
            number="04"
            title="Запуск в работу"
            description="Сопровождаю изменения до рабочего результата: внедрение, обучение, контроль, корректировка."
          />
        </div>
      </Section>

      {/* Business & IT Link */}
      <Section className="bg-brand-blue text-white rounded-3xl py-12 px-8 md:px-12 my-10 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6">Связываю бизнес и IT в одну рабочую систему</h2>
            <div className="space-y-4 text-sm md:text-base font-light text-slate-300 leading-relaxed">
              <p>Я выступаю связующим звеном между собственником, бизнесом, подрядчиками и IT-командой.</p>
              <p>Помогаю понять, какие процессы действительно нужно автоматизировать, где AI даст реальную пользу, как правильно сформулировать задачу, подготовить ТЗ, выбрать подрядчиков и проконтролировать реализацию так, чтобы внедрение работало на бизнес, а не превращалось в дорогую игрушку.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              "оценка процессов",
              "карта автоматизации",
              "постановка задачи",
              "выбор подрядчиков",
              "контроль внедрения"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/10 p-3.5 rounded-xl border border-white/10 hover:bg-white/15 transition-all">
                <CheckCircle2 size={16} className="text-brand-gray opacity-60" />
                <span className="text-[11px] font-bold uppercase tracking-widest">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Investment Track */}
      <Section className="bg-white border-b border-slate-100">
        <div className="max-w-3xl mb-10">
          <h2 className="text-xl font-bold text-brand-blue uppercase tracking-tight mb-4">Инвестиционный трек</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Помогаю подготовить компанию к привлечению капитала: сделать её более понятной, прозрачной и привлекательной для инвестора. Выстраиваю инвестиционную логику, помогаю упаковать проект и, при необходимости, сопровождаю процесс поиска инвестора под задачи бизнеса.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "Подготовка компании", d: "к инвестициям" },
            { t: "Упаковка", d: "проекта" },
            { t: "Инвестиционная", d: "логика" },
            { t: "Сопровождение", d: "поиска инвестора" }
          ].map((item, i) => (
            <div key={i} className="bg-brand-gray border border-slate-100 p-5 rounded-xl text-center">
              <div className="text-[11px] font-black text-brand-blue uppercase tracking-tight mb-1">{item.t}</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Internal Circuit */}
      <Section>
        <div className="max-w-3xl mb-10">
          <h2 className="text-xl font-bold text-brand-blue uppercase tracking-tight mb-4">Что усиливаю внутри компании</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Помогаю создавать корпоративные базы знаний, внутренние академии, управленческие контуры и практические форматы развития команды. Для меня важно, чтобы знания, правила и подходы не держались на нескольких людях, а становились частью системы.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "корпоративные базы знаний", icon: BookOpen },
            { title: "внутренние академии", icon: GraduationCap },
            { title: "развитие команды", icon: Users },
            { title: "культурный код компании", icon: ShieldCheck }
          ].map((item, i) => (
            <div key={i} className="premium-card text-center flex flex-col items-center">
              <item.icon size={20} className="text-brand-blue mb-4 opacity-70" />
              <div className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">{item.title}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Strategic Formats (Rebuilt) */}
      <Section className="bg-brand-blue text-white rounded-3xl py-12 px-8 my-10 text-center flex flex-col items-center">
        <Presentation size={32} className="mb-6 opacity-40" />
        <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Игровые и стратегические форматы</h2>
        <p className="max-w-2xl text-sm md:text-base font-light text-slate-300 leading-relaxed mb-8">
          Провожу авторские игровые и стратегические сессии для обучения, переговорной практики и проработки бизнес-задач.
        </p>
        <div className="inline-block bg-white/10 px-6 py-3 rounded-full border border-white/20">
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white">
            За 2025–2026 годы провёл <span className="text-brand-accent brightness-150">76 таких сессий</span>, в которых участвовало более 1100 человек
          </span>
        </div>
      </Section>

      {/* Results in Figures (Overhaul) */}
      <Section id="results" className="bg-slate-50/50">
        <div className="mb-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-brand-blue uppercase tracking-tight">Результаты в цифрах</h2>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.1em] mt-1">Часть показателей, которые подтверждают практический эффект моей работы</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="20+" label="в управлении компаниями" sub="лет" />
          <StatCard value="18" label="работы в консалтинге" sub="лет" />
          <StatCard value="1600+" label="разборов с предпринимателями" />
          <StatCard value="250+" label="совокупный экономический эффект" sub="млн ₽" />
          <StatCard value="193+" label="выигранные тендеры за 5 лет" sub="млн ₽" />
          <StatCard value="18+" label="кейсов запуска новых продуктов" />
          <StatCard value="7" label="кейсов создания и запуска новых брендов" />
          <StatCard value="25%" label="снижение операционных издержек" />
        </div>
      </Section>

      {/* Niches Section */}
      <Section className="bg-white border-y border-slate-100">
        <h2 className="text-xl font-bold text-brand-blue uppercase tracking-tight mb-8">С какими бизнесами работал</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "недвижимость", "коммерческая недвижимость", "строительство", "медицина", 
            "образование", "услуги", "лингвистический бизнес", "транспорт", "реклама", 
            "колл-центр", "гостиницы", "рестораны", "производство", "мебель", "ЖКХ", 
            "бухгалтерские услуги", "IT", "товары для детей", "ювелирные изделия", 
            "салоны красоты", "эко-проекты"
          ].map((niche, i) => (
            <Tag key={i} text={niche} />
          ))}
        </div>
      </Section>

      {/* When Especially Useful */}
      <Section>
        <h2 className="text-xl font-bold text-brand-blue uppercase tracking-tight mb-8">Когда я особенно полезен</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "когда в компании много хаоса и нет понятной логики управления",
            "когда собственник держит слишком многое на себе",
            "когда нужно понять, что пересобрать, а что автоматизировать",
            "когда бизнес упёрся в рост и не хватает управляемости",
            "когда нужно усилить продажи, продукт или команду",
            "когда нужен внешний сильный партнёр, а не просто подрядчик"
          ].map((text, i) => (
            <div key={i} className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm flex items-start gap-4">
              <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
              <p className="text-[12px] text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <footer className="bg-slate-900 text-white pt-16 pb-12 mt-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-blue/30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 leading-snug">
                Когда нужен сильный внешний партнёр для изменений
              </h2>
              <p className="text-sm md:text-base font-medium text-slate-400 leading-relaxed md:px-16 opacity-90">
                Если в компании накопился управленческий хаос, рост упёрся в старую модель или нужно собрать систему изменений — давайте обсудим вашу задачу в Telegram.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={handleTelegramContact}
                className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-xl shadow-white/5"
              >
                Связаться со мной
                <ArrowRight size={16} />
              </button>
              <button 
                onClick={handleTelegramContact}
                className="border border-slate-700 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all"
              >
                Оставить запрос
              </button>
            </div>

            <div className="pt-16 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-black text-slate-500">
              <div className="flex flex-col items-center md:items-start gap-1">
                <span>© 2024 Роман Беляев</span>
                <span className="opacity-50 text-[8px]">Стратегический партнёр собственника</span>
              </div>
              <div className="flex gap-10">
                <a 
                  href="https://t.me/BRV_Roman" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Bot size={12} className="opacity-40" />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
