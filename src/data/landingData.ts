import { ModuleItem, BonusItem, TestimonialItem, ObjectionItem } from '../types';
import mirettiProof from '../assets/images/miretti_proof_screenshot_1786495521836.jpg';
import lucasProof from '../assets/images/lucas_proof_screenshot_1786495534595.jpg';
import luizProof from '../assets/images/luiz_proof_screenshot_1786495548661.jpg';
import juliaProof from '../assets/images/julia_proof_screenshot_1786495560857.jpg';

export const LANDING_CONTENT = {
  headerCountdownText: "⏳ Faltam {days} dias e {hours}h pro lançamento de GTA VI (19/11)",
  hero: {
    badge: "O MUNDO ESPEROU MAIS DE 10 ANOS POR ESSE MOMENTO",
    headlineLine1: "MONTE SEU CANAL DE ",
    headlineGta: "GTA VI",
    headlineLine2: " – 100% ",
    headlinePronto: "PRONTO",
    headlineLine3: " PRA POSTAR – E ",
    headlineLucre: "LUCRE",
    headlineLine4: " COM A MAIOR ONDA DE ATENÇÃO DA HISTÓRIA",
    subheadlineBold: "SEM APARECER, SEM SABER EDITAR E SEM PRECISAR TER O JOGO",
    imageCaption: "Faltam poucos meses. Quem entender o movimento agora pode entrar pra próxima geração de criadores lucrativos da internet. Quem só assistir, vai ver os outros faturarem.",
    ctaText: "QUERO GARANTIR MEU ACESSO AGORA",
    microcopy: "⚡ Acesso imediato em uma área de membros • Compra 100% segura",
  },
  quickProof: {
    title: "Criado por quem já bateu meio milhão de visualizações em 1 semana em conta nova",
    badge: "RESULTADO PRÁTICO",
    stats: [
      { number: "+500k", label: "Views em 1 semana em conta nova" },
      { number: "100%", label: "Feito pelo celular e sem aparecer" },
      { number: "0", label: "Experiência prévia necessária" }
    ]
  },

  opportunityTitle: "ISSO NÃO É \"HYPE\". É A MAIOR OPORTUNIDADE DE CONTEÚDO DA DÉCADA – COM DATA MARCADA.",
  opportunitySubtitle: "Os números do mercado comprovam: o lançamento de GTA VI será a maior mina de ouro da internet nos próximos anos.",
  opportunityStats: [
    { number: "475M", label: "views em 24h no trailer 2 (recorde da internet)" },
    { number: "+10", label: "anos de GTA no topo do YouTube" },
    { number: "US$10bi", label: "só o GTA 5 já faturou" },
    { number: "19/11", label: "data de lançamento de GTA VI" }
  ],
  opportunityInsights: [
    {
      highlight: "esse jogo vai produzir milionários.",
      text: "Um criador que esteve com a Rockstar foi direto: "
    },
    {
      highlight1: "comprou os times do FiveM/RedM",
      highlight2: "marketplace oficial",
      text: "A Rockstar comprou os times do FiveM/RedM e abriu um marketplace oficial — estão construindo as ferramentas pra criador faturar."
    },
    {
      highlight: "uma das categorias mais lucrativas",
      text: "Conteúdo de GTA é uma das categorias mais lucrativas do YouTube há mais de 10 anos."
    }
  ],
  opportunityConclusion: "Em poucos meses, centenas de milhões de pessoas vão estar procurando, assistindo e comentando GTA VI ao mesmo tempo. Atenção desse tamanho é dinheiro na mesa. A única pergunta é quem vai estar posicionado pra pegar.",

  howItWorksTitle: "EM 3 PASSOS:",
  howItWorksSteps: [
    {
      step: "1",
      title: "Baixa a pasta.",
      description: "Tudo organizado, acesso imediato."
    },
    {
      step: "2",
      title: "Monta o vídeo.",
      description: "Um clipe + um gancho + um título no template, em minutos."
    },
    {
      step: "3",
      title: "Publica e repete.",
      description: "Seguindo o calendário, todo dia, enquanto a onda cresce."
    }
  ],

  targetAudience: {
    forYouTitle: "É PRA VOCÊ SE:",
    forYouItems: [
      "Quer começar sem aparecer e sem perder semanas planejando.",
      "Entendeu que GTA VI é uma oportunidade rara e quer entrar antes da multidão.",
      "Quer um caminho pronto, não mais um curso gigante pra assistir."
    ],
    notForYouTitle: "NÃO É PRA VOCÊ SE:",
    notForYouItems: [
      "Procura enriquecer da noite pro dia sem fazer nada.",
      "Não topa publicar com consistência alguns minutos por dia."
    ]
  },

  modulesTitle: "O QUE VOCÊ RECEBE HOJE",
  modulesSubtitle: "Tudo mastigado e organizado pra você só copiar, adaptar e postar:",
  modules: [
    {
      id: "m1",
      title: "Arquivo Vice City",
      description: "Sua biblioteca com clipes em alta qualidade, organizados e prontos pra edição rápida.",
      iconName: "FolderVideo"
    },
    {
      id: "m2",
      title: "Ganchos de Vice City",
      description: "150 frases de abertura testadas pra prender o público nos primeiros 3 segundos.",
      iconName: "Sparkles"
    },
    {
      id: "m3",
      title: "Títulos e Legendas Otimizados",
      description: "Textos prontos que o algoritmo do TikTok, Reels, Kwai e Shorts adora entregar.",
      iconName: "FileText"
    },
    {
      id: "m4",
      title: "Molduras Vice City",
      description: "Templates editáveis no Canva no estilo neon — é só trocar o vídeo e exportar.",
      iconName: "Layout"
    },
    {
      id: "m5",
      title: "Fórmula 500k",
      description: "O método simples por trás dos posts que realmente furaram a bolha e viralizaram.",
      iconName: "TrendingUp"
    },
    {
      id: "m8",
      title: "Rota Vice City",
      description: "Calendário prático de 30 dias mostrando exatamente o que postar em cada dia.",
      iconName: "Calendar"
    }
  ] as ModuleItem[],

  bonusesTitle: "🎁 BÔNUS EXCLUSIVOS INCLUSOS",
  bonusesSubtitle: "Ferramentas extras para acelerar seus resultados desde o primeiro dia:",
  bonuses: [
    {
      id: "b1",
      title: "Bônus 1 — Mapa de 30 sub-nichos de baixa concorrência:",
      description: "exatamente o que milhões vão pesquisar (money methods, segredos, melhores carros, roleplay...) e onde dá pra crescer rápido.",
      tag: "BÔNUS 1",
      icon: "🎁"
    },
    {
      id: "b2",
      title: "Bônus 2 — 60 roteiros curtos prontos",
      description: "pros sub-nichos.",
      tag: "BÔNUS 2",
      icon: "🎁"
    },
    {
      id: "b3",
      title: "Bônus 3 — Manual de chegada:",
      description: "do nome à primeira publicação, sem aparecer.",
      tag: "BÔNUS 3",
      icon: "🎁"
    },
    {
      id: "b4",
      title: "Bônus 4 — Mini guia de edição:",
      description: "tutorial rápido direto ao ponto no celular. Edite seus vídeos em menos de 5 minutos.",
      tag: "BÔNUS 4",
      icon: "🎁"
    },
    {
      id: "b5",
      title: "Bônus 5 — Checklist “Janela dos 5 Meses”:",
      description: "seu plano de ataque até o lançamento.",
      tag: "BÔNUS 5",
      icon: "🎁"
    },
    {
      id: "b6",
      title: "Bônus de Ação Rápida (só pra quem entra no lote atual):",
      description: "toda vez que sair material novo de GTA VI, você recebe a atualização da biblioteca primeiro, sem pagar nada a mais.",
      tag: "⚡ AÇÃO RÁPIDA",
      icon: "⚡",
      isFastAction: true
    }
  ] as BonusItem[],

  testimonialsTitle: "DEPOIMENTOS DE ALUNOS",
  testimonialsSubtitle: "Resultados reais de quem está aplicando o método do Projeto Vice City:",
  testimonials: [
    {
      id: "t1",
      name: "Mirelly",
      role: "Aluna Projeto Vice City",
      avatarPlaceholder: "MI",
      rating: 5,
      resultBadge: "💵 $312.89 em Recompensas (872.5k views)",
      content: "Oii, boa tarde! 😄 Precisei vir aqui compartilhar isso com você! $312.89 de recompensa 🙌 É muita coisa pra mim, ainda não caiu a ficha! Tô seguindo tudo certinho que você ensinou e os resultados estão sendo incríveis ✨📈 Muito obrigada por todo suporte, você faz toda a diferença! 🥰💜",
      proofImageUrl: mirettiProof,
      dashboardProof: {
        lastUpdate: "18-2",
        totalAmount: "$312.89",
        estimatedRewards: "$312.89",
        views: "872.5K",
        rpm: "$0.36",
        timestamp: "13:56"
      }
    },
    {
      id: "t2",
      name: "Lucas",
      role: "Aluno Projeto Vice City",
      avatarPlaceholder: "LU",
      rating: 5,
      resultBadge: "💵 $204.57 em Recompensas (657.3k views)",
      content: "Falaaa, boa noitee! 😄 Só passando pra compartilhar minha primeira grande conquista com você! Seguindo tudo certinho que você ensinou, meu canal já tá dando resultado e olha isso! 🚀💰 Muito feliz e motivado pra continuar! Valeuu demais! Tamo junto! 🙏🔥",
      proofImageUrl: lucasProof,
      dashboardProof: {
        lastUpdate: "19-2",
        totalAmount: "$204.57",
        estimatedRewards: "$204.57",
        views: "657.3K",
        rpm: "$0.31",
        timestamp: "23:07"
      }
    },
    {
      id: "t3",
      name: "Luiz",
      role: "Aluno Projeto Vice City",
      avatarPlaceholder: "LZ",
      rating: 5,
      resultBadge: "💵 $128.36 em Recompensas (412.7k views)",
      content: "Bom dia! ☀️ Cara, olha isso! $128.36 de recompensa! 😱 Ainda nem acredito que isso tudo tá acontecendo comigo. Tô seguindo o projeto direitinho, aplicando tudo que você ensinou e os resultados estão aparecendo! 📈🔥 Muito obrigado por todo suporte, tô muito feliz mesmo! Bora pra cima! 💪🚀",
      proofImageUrl: luizProof,
      dashboardProof: {
        lastUpdate: "20-2",
        totalAmount: "$128.36",
        estimatedRewards: "$128.36",
        views: "412.7K",
        rpm: "$0.31",
        timestamp: "08:42"
      }
    },
    {
      id: "t4",
      name: "Júlia",
      role: "Aluna Projeto Vice City",
      avatarPlaceholder: "JU",
      rating: 5,
      resultBadge: "💵 $47.55 • Monetizou canal em < 2 meses",
      content: "Opa, boa noite, realmente quem chega cedo bebe água limpa ein hahaha. Tô seguindo o projeto com consistência e monetizei meu canal em menos de 2 meses. Isso é surreal demaaaaaais. 😭🔥🚀 Muito obrigadaaa! 🙏💜",
      proofImageUrl: juliaProof,
      dashboardProof: {
        lastUpdate: "19-2",
        totalAmount: "$47.55",
        estimatedRewards: "$47.55",
        views: "223.8K",
        rpm: "$0.21",
        timestamp: "23:07"
      }
    }
  ] as TestimonialItem[],

  pricing: {
    originalPrice: "R$ 67,00",
    finalPrice: "R$ 27,90",
    installmentText: "ou apenas R$ 27,90 à vista",
    ctaText: "QUERO GARANTIR MEU ACESSO POR R$ 27,90",
    guaranteeNotice: "🔒 Pagamento 100% seguro • Acesso imediato em uma área de membros"
  },

  objectionsTitle: "PERGUNTAS FREQUENTES",
  objectionsSubtitle: "Tire suas dúvidas antes de começar:",
  objections: [
    {
      id: "o1",
      question: "Não vai estar saturado?",
      answer: "Pelo contrário! O hype do GTA VI está só começando e vai explodir de verdade até o lançamento. Quanto mais cedo você criar seu canal, mais autoridade acumula antes da onda gigante em novembro."
    },
    {
      id: "o2",
      question: "Não sei editar vídeo",
      answer: "Você não precisa saber nada de edição profissional! Entregamos um guia prático no CapCut para celular que ensina tudo em 5 minutos. Além disso, as molduras e clipes já vêm prontos."
    },
    {
      id: "o3",
      question: "Não quero aparecer",
      answer: "Perfeito! O método foi desenhado exatamente para canais 'dark' (sem rosto). Você usa nossos clipes, ganchos visuais, legendas automáticas e vozes narradas se quiser."
    },
    {
      id: "o4",
      question: "Não tenho o jogo nem console",
      answer: "Você não precisa jogar nem ter videogame! Nosso Arquivo Vice City fornece todos os clipes, trailers e cenas gravadas em alta resolução para você montar seu conteúdo."
    }
  ] as ObjectionItem[],

  guarantee: {
    title: "GARANTIA INCONDICIONAL DE 7 DIAS",
    description: "Você entra, baixa o material, assiste aos guias e testa. Se dentro de 7 dias achar que o Projeto Vice City não é pra você, basta mandar uma mensagem e devolvemos 100% do seu dinheiro, sem perguntas e sem enrolação."
  },

  finalCta: {
    title: "Aproveite o maior hype da década no seu celular",
    description: "Não espere o jogo lançar para começar. Monte seu canal hoje e esteja pronto para monetizar o lançamento do GTA VI.",
    buttonText: "GARANTIR MEU ACESSO COM DESCONTO",
    microcopy: "⚡ Oferta por tempo limitado • Acesso imediato em uma área de membros"
  }
};
