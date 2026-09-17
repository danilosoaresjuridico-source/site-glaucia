export interface ServiceContent {
  slug: string;
  legacyPath: string;
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
  note: string;
  quote: string;
  whatsappUrl: string;
  cardDescription: string;
  cardTitle?: string;
}

export const services: ServiceContent[] = [
  {
    slug: "consulta-integrativa",
    legacyPath: "/servico-consulta-integrativa.html",
    eyebrow: "Porta de entrada",
    title: "Consulta Integrativa Personalizada",
    description:
      "Você sente que seu corpo vem dando sinais — cansaço que não passa, sono irregular, digestão alterada — mas nenhuma avaliação isolada parece enxergar…",
    paragraphs: [
      "Você sente que seu corpo vem dando sinais — cansaço que não passa, sono irregular, digestão alterada — mas nenhuma avaliação isolada parece enxergar o quadro completo? A Consulta Integrativa Personalizada existe exatamente para isso: olhar para você por inteiro.",
      "É a porta de entrada do acompanhamento comigo. Antes mesmo do nosso encontro, você preenche uma anamnese estruturada sobre sua história de saúde, hábitos, sono, alimentação e objetivos. Na consulta, com 60 a 90 minutos dedicados só a você, eu interpreto esse conjunto, identifico os eixos de maior sobrecarga do seu organismo e construo uma estratégia de cuidado sob medida — que pode integrar avaliação bioinformacional, recursos biofísicos, orientações de estilo de vida e outras práticas integrativas.",
      "É indicada para quem quer cuidar da saúde de forma preventiva, entender sinais persistentes do corpo ou organizar um processo de cuidado com começo, meio e direção.",
    ],
    note: "A consulta integrativa é um cuidado complementar — não substitui avaliação médica, exames ou tratamentos prescritos. Informe sempre diagnósticos, medicamentos em uso e condições em acompanhamento.",
    quote: "Seu corpo está falando. Que tal reservar um tempo para escutá-lo?",
    whatsappUrl:
      "https://wa.me/5517996823466?text=Ol%C3%A1%2C%20Glaucia%21%20Gostaria%20de%20agendar%20uma%20Consulta%20Integrativa%20Personalizada.",
    cardDescription:
      "Anamnese completa e escuta dedicada para compreender sua história — a base de um plano de cuidado sob medida.",
  },
  {
    slug: "mapeamento-bioinformacional",
    legacyPath: "/servico-mapeamento-bioinformacional.html",
    eyebrow: "Análise de campo",
    title: "Mapeamento Bioinformacional",
    description:
      "E se você pudesse visualizar quais sistemas do seu organismo estão pedindo mais atenção — antes de escolher por onde começar a cuidar? É essa leitura…",
    paragraphs: [
      "E se você pudesse visualizar quais sistemas do seu organismo estão pedindo mais atenção — antes de escolher por onde começar a cuidar? É essa leitura que o Mapeamento Bioinformacional oferece.",
      "Por meio de tecnologia de análise do campo bioinformacional, a avaliação observa como o seu terreno biológico está organizado neste momento: sistemas orgânicos, metabolismo, microbiota, fatores ambientais, eixo neuroendócrino e outros marcadores funcionais. A proposta não é procurar doenças, e sim revelar prioridades — quais áreas demandam suporte e em que ordem.",
      "O processo começa com uma anamnese estruturada e uma fotografia recente, usada apenas como referência individual dentro da tecnologia (nunca para análise estética). Depois do mapeamento, você recebe uma devolutiva em atendimento dedicado, com a interpretação técnica dos achados e um plano de cuidado personalizado.",
      "É indicado para quem convive com sintomas recorrentes, baixa vitalidade, sobrecarga emocional ou quer começar um acompanhamento integrativo com clareza e método.",
    ],
    note: "O mapeamento não tem finalidade diagnóstica e não substitui exames clínicos ou laboratoriais. É um recurso complementar de leitura funcional.",
    quote: "Descubra o que o seu terreno biológico tem a dizer.",
    whatsappUrl:
      "https://wa.me/5517996823466?text=Ol%C3%A1%2C%20Glaucia%21%20Gostaria%20de%20agendar%20um%20Mapeamento%20Bioinformacional.",
    cardDescription:
      "Leitura do campo bioinformacional para revelar quais sistemas do organismo pedem mais atenção — e por onde começar.",
  },
  {
    slug: "biorressonancia",
    legacyPath: "/servico-biorressonancia.html",
    eyebrow: "Biorressonância",
    title: "Biorressonância Manual e Eletrônica",
    description:
      "Seu corpo responde o tempo todo — a alimentos, ambientes, estímulos e sobrecargas. A Biorressonância é o recurso biofísico que ajuda a observar essas…",
    paragraphs: [
      "Seu corpo responde o tempo todo — a alimentos, ambientes, estímulos e sobrecargas. A Biorressonância é o recurso biofísico que ajuda a observar essas respostas sutis e transformá-las em direção de cuidado.",
      "No meu atendimento, a avaliação pode ser manual, por instrumento de percepção biofísica, ou eletrônica, por tecnologia de leitura frequencial. Nas duas formas, o objetivo é o mesmo: identificar áreas de sobrecarga, sensibilidades do terreno biológico e prioridades de suporte — sempre interpretadas dentro do seu contexto clínico e da sua história.",
      "A sessão dura de 40 a 60 minutos, começa com uma conversa sobre seu momento atual e é totalmente confortável e não invasiva. Pode ser usada como avaliação inicial ou em momentos específicos do acompanhamento, para verificar como seu organismo está respondendo e ajustar estratégias.",
    ],
    note: "Antes da sessão, informe uso de marcapasso ou dispositivos implantáveis, gestação, epilepsia e condições em acompanhamento. A biorressonância é ferramenta complementar — não substitui diagnóstico médico nem exames laboratoriais.",
    quote: "Entenda como seu organismo está respondendo.",
    whatsappUrl:
      "https://wa.me/5517996823466?text=Ol%C3%A1%2C%20Glaucia%21%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20Biorresson%C3%A2ncia.",
    cardDescription:
      "Avaliação biofísica das respostas sutis do organismo, identificando sobrecargas e prioridades de cuidado.",
  },
  {
    slug: "agua-vitalizada",
    legacyPath: "/servico-agua-vitalizada.html",
    eyebrow: "Água vitalizada",
    title: "Terapia com Água Vitalizada",
    description:
      "Às vezes o que o organismo mais precisa não é de mais um estímulo forte — é de um apoio sutil, constante e inteligente para reencontrar o próprio…",
    paragraphs: [
      "Às vezes o que o organismo mais precisa não é de mais um estímulo forte — é de um apoio sutil, constante e inteligente para reencontrar o próprio equilíbrio. É essa a proposta da Terapia com Água Vitalizada.",
      "Trata-se de um recurso de modulação biofísica que utiliza água vitalizada em programas específicos, escolhidos conforme a sua avaliação: suporte geral do terreno biológico, equilíbrio linfático, modulação de sobrecargas ou reorganização funcional. Tudo personalizado para o seu momento.",
      "A sessão é simples e agradável: você permanece em repouso, sem dor e sem qualquer procedimento invasivo, por 30 a 40 minutos. Muitas pessoas relatam sensação de leveza e relaxamento — as respostas variam, porque cada organismo tem seu ritmo, e é esse ritmo que conduz o plano. A frequência pode ser semanal ou quinzenal, com adaptações para idosos, crianças e pessoas mais sensíveis.",
      "Indicada especialmente em fases de cansaço, baixa vitalidade, sensação de retenção, exposição ambiental frequente ou como preparo do terreno para outras etapas do cuidado.",
    ],
    note: "Informe gestação, doenças crônicas, condições renais, cardíacas ou neurológicas e sintomas agudos no dia. É um recurso complementar: não substitui avaliação médica, exames ou tratamentos prescritos.",
    quote: "Dê ao seu organismo o suporte que ele pede.",
    whatsappUrl:
      "https://wa.me/5517996823466?text=Ol%C3%A1%2C%20Glaucia%21%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Terapia%20com%20%C3%81gua%20Vitalizada.",
    cardDescription:
      "Modulação biofísica por água vitalizada, em programas personalizados de suporte ao terreno biológico.",
  },
  {
    slug: "toque-bioeletroquantico",
    legacyPath: "/servico-toque-bioeletroquantico.html",
    eyebrow: "Técnica manual",
    title: "Toque Bioeletroquântico",
    description:
      "Existe um tipo de cuidado que acontece com as mãos, no ritmo do seu corpo. O Toque Bioeletroquântico é uma técnica de estimulação bioelétrica manual…",
    paragraphs: [
      "Existe um tipo de cuidado que acontece com as mãos, no ritmo do seu corpo. O Toque Bioeletroquântico é uma técnica de estimulação bioelétrica manual que associa toque terapêutico, condução de frequências e mobilização tecidual, para auxiliar o equilíbrio neuromuscular, circulatório, linfático e bioenergético do organismo.",
      "A sessão começa com acolhimento e uma conversa breve sobre seu momento: tensão, sono, energia, estado emocional. Em seguida, em posição confortável, você recebe a técnica: toque terapêutico leve, condução de frequências e mobilização suave dos tecidos, sempre com seu consentimento e respeito total aos seus limites e ao seu conforto.",
      "Durante os 40 a 60 minutos, o convite é desacelerar. Algumas pessoas vivenciam relaxamento profundo; outras percebem calor, leveza, alívio de tensões ou a respiração se aquietando. Cada organismo responde à sua maneira.",
      "É indicado para quem busca reduzir tensões e sensação de sobrecarga, apoiar a circulação e a drenagem natural do corpo, atravessar fases de estresse com mais serenidade ou cuidar do equilíbrio corporal e energético de forma segura.",
    ],
    note: "Informe gestação, epilepsia, dispositivos implantáveis e condições em acompanhamento. É prática complementar — não substitui acompanhamento médico ou psicológico.",
    quote: "Permita-se essa pausa.",
    whatsappUrl:
      "https://wa.me/5517996823466?text=Ol%C3%A1%2C%20Glaucia%21%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Toque%20Bioeletroqu%C3%A2ntico.",
    cardDescription:
      "Estimulação bioelétrica manual que une toque terapêutico, condução de frequências e mobilização tecidual.",
  },
  {
    slug: "relaxamento-neurofuncional",
    legacyPath: "/servico-relaxamento-neurofuncional.html",
    eyebrow: "Sistema nervoso",
    title: "Relaxamento e Modulação Neurofuncional",
    description:
      "Mente acelerada, sono irregular, aquela sensação de estar sempre “ligado”? Seu sistema nervoso pode estar pedindo uma pausa de verdade — e é isso que…",
    paragraphs: [
      "Mente acelerada, sono irregular, aquela sensação de estar sempre “ligado”? Seu sistema nervoso pode estar pedindo uma pausa de verdade — e é isso que esta sessão oferece.",
      "O Relaxamento e Modulação Neurofuncional utiliza um recurso biofísico de estímulo suave, aplicado em ambiente tranquilo, para favorecer desaceleração, repouso profundo e regulação do sistema nervoso. Você permanece em posição confortável enquanto recebe o estímulo, em uma experiência silenciosa e relaxante. Tempo e intensidade são ajustados à sua tolerância e sensibilidade.",
      "A sessão dura de 30 a 60 minutos, e a frequência — semanal, quinzenal ou pontual em momentos de maior tensão — é definida junto com você, conforme o objetivo do acompanhamento.",
      "É indicada para pessoas com sensação de estresse, sobrecarga mental, dificuldade de relaxar, sono irregular ou necessidade de apoiar o sistema nervoso dentro de um plano integrativo mais amplo.",
    ],
    note: "Informe gestação, epilepsia, marcapasso ou dispositivos implantáveis, condições neurológicas ou psiquiátricas em acompanhamento e sintomas agudos. Recurso complementar: não substitui acompanhamento médico, psicológico ou tratamento prescrito.",
    quote: "Seu descanso também merece método.",
    whatsappUrl:
      "https://wa.me/5517996823466?text=Ol%C3%A1%2C%20Glaucia%21%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Relaxamento%20e%20Modula%C3%A7%C3%A3o%20Neurofuncional.",
    cardDescription:
      "Estímulo biofísico suave, em ambiente tranquilo, para desacelerar a mente e apoiar a regulação do sistema nervoso.",
  },
  {
    slug: "terreno-biologico",
    legacyPath: "/servico-terreno-biologico.html",
    eyebrow: "Terreno biológico",
    title: "Limpeza e Modulação do Terreno Biológico",
    description:
      "Cansaço persistente, sensação de peso, digestão irregular, exposição frequente a poluentes ou químicos? Antes de olhar para sintomas isolados, vale…",
    paragraphs: [
      "Cansaço persistente, sensação de peso, digestão irregular, exposição frequente a poluentes ou químicos? Antes de olhar para sintomas isolados, vale olhar para o terreno onde tudo acontece: o seu organismo como um todo.",
      "A Limpeza e Modulação do Terreno Biológico é um protocolo integrativo e progressivo de organização funcional. Nada de “desintoxicação” agressiva: a proposta é apoiar o corpo por etapas, respeitando sua capacidade de adaptação, para que ele recupere melhores condições de equilíbrio e autorregulação.",
      "Tudo começa com uma avaliação integrativa completa — histórico, hábitos, hidratação, sono, exposições ambientais — que pode ser aprofundada com mapeamento bioinformacional ou biorressonância. A partir dela, eu monto a sua estratégia personalizada: orientações de hidratação e rotina, suporte nutricional, suplementação quando indicada, água vitalizada, recursos biofísicos e acompanhamento próximo da resposta do seu organismo.",
      "A primeira avaliação dura de 60 a 90 minutos; as sessões complementares, de 30 a 60.",
    ],
    note: "É essencial informar doenças renais, hepáticas ou cardíacas, gestação, amamentação, uso de anticoagulantes, quimioterapia, imunossupressores e medicamentos contínuos. Protocolo complementar: não substitui tratamentos médicos.",
    quote: "Comece pelo alicerce da sua saúde.",
    whatsappUrl:
      "https://wa.me/5517996823466?text=Ol%C3%A1%2C%20Glaucia%21%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20Limpeza%20e%20Modula%C3%A7%C3%A3o%20do%20Terreno%20Biol%C3%B3gico.",
    cardDescription:
      "Protocolo progressivo de organização funcional, apoiando os processos naturais de equilíbrio do organismo.",
    cardTitle: "Limpeza e Modulação do Terreno",
  },
  {
    slug: "enfermagem-homecare",
    legacyPath: "/servico-enfermagem-homecare.html",
    eyebrow: "Enfermagem",
    title: "Enfermagem Clássica & Homecare",
    description:
      "Há momentos em que o que a família mais precisa é de presença profissional: alguém com olhar clínico, técnica segura e acolhimento — na clínica ou na…",
    paragraphs: [
      "Há momentos em que o que a família mais precisa é de presença profissional: alguém com olhar clínico, técnica segura e acolhimento — na clínica ou na sua casa.",
      "Na frente de Enfermagem Clássica & Homecare, reúno os atendimentos convencionais que realizo dentro do escopo técnico e legal da Enfermagem: avaliação de sinais vitais, acompanhamento de pressão e glicemia, curativos simples, cuidados com a pele, apoio pós-operatório, administração de medicações conforme prescrição, acompanhamento de idosos e pessoas com mobilidade reduzida, organização da rotina de cuidados e orientação à família.",
      "No atendimento domiciliar, eu também avalio o ambiente, os recursos disponíveis e os riscos à segurança do paciente — para que o cuidado funcione de verdade no dia a dia da casa. Consultas e orientações duram de 40 a 60 minutos; a frequência pode ser pontual, semanal ou ajustada à condição do paciente.",
      "Para o atendimento, tenha em mãos diagnóstico médico, prescrição atualizada, medicamentos em uso e exames recentes.",
    ],
    note: "Em situações de urgência — dor intensa, falta de ar, sinais de AVC, piora súbita — procure imediatamente um serviço médico de emergência: o atendimento de Enfermagem não substitui pronto atendimento.",
    quote: "Cuidado técnico e humano, onde você precisar.",
    whatsappUrl:
      "https://wa.me/5517996823466?text=Ol%C3%A1%2C%20Glaucia%21%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Enfermagem%20Cl%C3%A1ssica%20e%20Homecare.",
    cardDescription:
      "Consultas, procedimentos e orientações de Enfermagem, no consultório ou no conforto da sua casa.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
