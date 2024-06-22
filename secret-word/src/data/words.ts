const wordList: [{ [key: string]: string[] }] = [
    {
        'veículos': [
            'carro', 'bicicleta', 'moto', 'avião', 'barco', 'caminhão', 'ônibus', 'triciclo', 'patinete', 'trem', 'metrô', 'helicóptero', 'balão', 'navio', 'submarino', 'carrinho de golfe', 'escolta', 'patins', 'caiaque', 'jangada', 'hovercraft'
        ],
        'frutas': [
            'maçã', 'banana', 'laranja', 'manga', 'uva', 'pera', 'melancia', 'morango', 'abacaxi', 'kiwi', 'pêssego', 'ameixa', 'cereja', 'figo', 'framboesa', 'mirtilo', 'goiaba', 'maracujá', 'caju', 'graviola', 'jabuticaba', 'lichia', 'nectarina', 'tangerina', 'pitaia'
        ],
        'profissões': [
            'professor', 'médico', 'engenheiro', 'pedreiro', 'mecânico', 'advogado', 'dentista', 'arquitecto', 'cientista', 'escritor', 'ator', 'cantor', 'biólogo', 'físico', 'químico', 'veterinário', 'farmacêutico', 'psicólogo', 'terapeuta', 'assistente social', 'padeiro', 'cozinheiro', 'garçom', 'barman', 'jornalista', 'fotógrafo', 'cineasta'
        ],
        'animais': [
            'cachorro', 'gato', 'elefante', 'tigre', 'leão', 'girafa', 'zebra', 'hipopótamo', 'rinoceronte', 'urso', 'canguru', 'coala', 'baleia', 'golfinho', 'tubarão', 'pinguim', 'águia', 'falcão', 'papagaio', 'periquito', 'pomba', 'coruja', 'abelha', 'formiga', 'aranha', 'mosquito', 'vespa', 'sapo', 'rato', 'hamster', 'coelho', 'ovelha', 'cabra', 'vaca', 'boi', 'porco', 'galinha', 'pato', 'ganso', 'pavão', 'tartaruga', 'crocodilo', 'lagarto', 'cobra', 'iguana', 'camaleão'
        ],
        'cores': [
            'vermelho', 'azul', 'verde', 'amarelo', 'roxo', 'laranja', 'preto', 'branco', 'cinza', 'rosa', 'marrom', 'bege', 'dourado', 'prateado', 'ciano', 'magenta', 'turquesa', 'vinho', 'ocre', 'esmeralda'
        ],
        'países': [
            'Brasil', 'Estados Unidos', 'Japão', 'França', 'Alemanha', 'Argentina', 'Chile', 'Uruguai', 'Paraguai', 'Bolívia', 'Peru', 'Equador', 'Colômbia', 'Venezuela', 'México', 'Canadá', 'Inglaterra', 'Espanha', 'Portugal', 'Itália', 'Grécia', 'Rússia', 'China', 'Índia', 'Austrália', 'Nova Zelândia', 'Egito', 'África do Sul', 'Nigéria', 'Quênia', 'Marrocos', 'Turquia', 'Coreia do Sul', 'Indonésia', 'Tailândia', 'Filipinas', 'Malásia', 'Singapura', 'Arábia Saudita', 'Israel', 'Emirados Árabes Unidos', 'Irã', 'Iraque', 'Síria', 'Líbano', 'Jordânia'
        ],
        'instrumentos musicais': [
            'violão', 'piano', 'bateria', 'flauta', 'violino', 'guitarra', 'baixo', 'saxofone', 'clarinete', 'trompete', 'trombone', 'teclado', 'acordeão', 'harmônica', 'oboé', 'fagote', 'banjo', 'ukulele', 'harpa', 'cítara', 'tímpano', 'marimba', 'vibrafone', 'xilofone', 'conga', 'bongo', 'tamborim', 'pandeiro', 'cavaquinho'
        ],
        'alimentos': [
            'arroz', 'feijão', 'carne', 'peixe', 'pão', 'batata', 'cenoura', 'tomate', 'alface', 'cebola', 'alho', 'brócolis', 'couve-flor', 'espinafre', 'abobrinha', 'berinjela', 'mandioca', 'inhame', 'milho', 'ervilha', 'lentilha', 'grão-de-bico', 'soja', 'tofu', 'queijo', 'leite', 'iogurte', 'manteiga', 'creme de leite', 'azeite', 'óleo de soja', 'óleo de girassol', 'margarina', 'presunto', 'salsicha', 'bacon', 'linguiça', 'salame', 'mortadela', 'peito de peru', 'atum', 'sardinha', 'camarão', 'lagosta', 'caranguejo', 'ostra', 'polvo', 'lula', 'salada', 'pizza', 'hambúrguer', 'hot dog', 'taco', 'burrito', 'nachos', 'sushi', 'temaki', 'yakisoba', 'ramen', 'spaghetti', 'lasanha', 'macarrão', 'risoto', 'paella', 'goulash', 'strogonoff', 'kebab', 'falafel', 'tabule', 'hommus', 'babaganoush'
        ],
        'esportes': [
            'futebol', 'basquete', 'tênis', 'natação', 'vôlei', 'handebol', 'rugby', 'críquete', 'golfe', 'esqui', 'snowboard', 'surfe', 'skate', 'patinação', 'hóquei', 'boxe', 'karatê', 'judô', 'taekwondo', 'kung fu', 'esgrima', 'remo', 'canoagem', 'vela', 'parapente', 'parapente', 'escalada', 'triatlo', 'maratona', 'corrida', 'caminhada', 'ciclismo', 'haltere', 'levantamento de peso', 'crossfit', 'ginástica', 'pilates', 'yoga', 'zumba', 'dança', 'balé'
        ],
        'tecnologia': [
            'computador', 'smartphone', 'tablet', 'impressora', 'televisão', 'notebook', 'smartwatch', 'drone', 'câmera', 'videogame', 'console', 'fones de ouvido', 'microfone', 'teclado', 'mouse', 'monitor', 'projetor', 'scanner', 'modem', 'roteador', 'disco rígido', 'SSD', 'pen drive', 'bluetooth', 'Wi-Fi', 'antena', 'satélite', 'GPS', 'datalogger', 'drones', 'robô', 'inteligência artificial', 'realidade virtual', 'realidade aumentada', 'impressora 3D', 'laser', 'microchip', 'nanotecnologia', 'biotecnologia', 'engenharia genética', 'criptografia', 'blockchain', 'cloud computing', 'big data', 'machine learning'
        ],
        'natureza': [
            'árvore', 'flor', 'rio', 'montanha', 'oceano', 'floresta', 'deserto', 'savanas', 'pantanal', 'mata atlântica', 'cerrado', 'caatinga', 'pampa', 'amazônia', 'vulcão', 'glaciar', 'caverna', 'cachoeira', 'praia', 'ilha', 'arquipélago', 'baía', 'recife', 'duna', 'vale', 'planície', 'planalto', 'serra', 'cordilheira', 'falésia', 'laguna', 'estação', 'neve', 'chuva', 'sol', 'vento', 'nuvem', 'tempestade', 'trovão', 'relâmpago', 'furacão', 'tornado', 'terremoto', 'tsunami', 'vulcão', 'erupção', 'aerossóis', 'albedo'
        ],
        'ferramentas': [
            'martelo', 'chave de fenda', 'serra', 'alicate', 'furadeira', 'parafuso', 'prego', 'porca', 'arruela', 'broca', 'nivel', 'esquadro', 'trena', 'metro', 'lima', 'plaina', 'serrote', 'formão', 'torno', 'máquina de solda', 'politriz', 'esmeril', 'tupia', 'ferramentas pneumáticas', 'compressor de ar', 'macaco hidráulico', 'cavalete', 'serra tico-tico', 'serra circular', 'serra de bancada', 'serra de fita', 'esmerilhadeira', 'retificadora', 'fresadora', 'torno mecânico', 'máquina de corte a laser', 'máquina de corte a plasma', 'máquina de jato de areia'
        ],
        'emoções': [
            'feliz', 'triste', 'nervoso', 'excitado', 'ansioso', 'alegre', 'eufórico', 'deprimido', 'apreensivo', 'calmo', 'relaxado', 'irritado', 'frustrado', 'confuso', 'surpreso', 'grato', 'entusiasmado', 'esperançoso', 'desesperado', 'envergonhado', 'culpado', 'inveja', 'ciúme', 'medo', 'coragem', 'nostalgia', 'saudade', 'empatia', 'simpatia', 'amor', 'ódio', 'amizade', 'solidão', 'tédio', 'paz', 'tranquilidade', 'agitação', 'determinação', 'desânimo', 'resignação', 'humilhação', 'orgulho', 'remorso'
        ],
        'estados': [
            'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul', 'Espírito Santo', 'Pernambuco', 'Ceará', 'Pará', 'Amazonas', 'Acre', 'Rondônia', 'Roraima', 'Amapá', 'Tocantins', 'Alagoas', 'Sergipe', 'Paraíba', 'Rio Grande do Norte', 'Maranhão', 'Piauí', 'Distrito Federal'
        ],
        'elementos químicos': [
            'hidrogênio', 'hélio', 'lítio', 'berílio', 'boro', 'carbono', 'nitrogênio', 'oxigênio', 'flúor', 'neônio', 'sódio', 'magnésio', 'alumínio', 'silício', 'fósforo', 'enxofre', 'cloro', 'argônio', 'potássio', 'cálcio', 'escândio', 'tório', 'vanádio', 'cromo', 'manganês', 'ferro', 'cobalto', 'níquel', 'cobre', 'zinco', 'gálio', 'germânio', 'arsênio', 'selênio', 'bromo', 'cripton', 'rubídio', 'estrôncio', 'ítrio', 'zircônio', 'nióbio', 'molibdênio', 'tecnécio', 'rutênio', 'ródio', 'paládio', 'prata', 'cádmio', 'índio', 'estanho', 'antimônio', 'telúrio', 'iodo', 'xenônio', 'césio', 'bário', 'lantânio', 'cério', 'praseodímio', 'neodímio', 'promécio', 'samário', 'europio', 'gadolínio', 'térbio', 'disprósio', 'hólmio', 'érbio', 'túlio', 'itérbio', 'lutécio', 'háfnio', 'tântalo', 'tungstênio', 'rênio', 'ósmio', 'irídio', 'platina', 'ouro', 'mercúrio', 'tálio', 'chumbo', 'bismuto', 'polônio', 'astato', 'radônio', 'frâncio', 'rádio', 'actínio', 'protactínio', 'urânio', 'netúnio', 'plutônio', 'amerício', 'curio', 'berquélio', 'califórnio', 'einsteinio', 'férmio', 'mendelevio', 'nobélio', 'laurêncio', 'rutherfordio', 'dúbnio', 'seabórgio', 'bohrio', 'hássio', 'meitnério', 'darmstádio', 'roentgênio', 'copernício', 'nihônio', 'fleróvio', 'moscóvio', 'livermório', 'tenessino', 'oganessônio'
        ],
        'mitologia': [
            'Zeus', 'Hera', 'Poseidon', 'Afrodite', 'Ares', 'Artemis', 'Atena', 'Deméter', 'Dionísio', 'Hades', 'Hefesto', 'Hermes', 'Héstia', 'Apolo', 'Herácles', 'Perseu', 'Teseu', 'Jasão', 'Aquiles', 'Orfeu', 'Ícaro', 'Minotauro', 'Medusa', 'Quimera', 'Hidra', 'Cerberus', 'Pegasus', 'Fênix', 'Centauro', 'Sátiro', 'Titã', 'Gorgona', 'Ninfa', 'Náiade', 'Dríade', 'Sereia', 'Fúria', 'Graia', 'Hécate', 'Eros', 'Pan', 'Selene', 'Helios', 'Eos', 'Atlas', 'Prometeu', 'Epimeteu', 'Metis', 'Mnemosine', 'Themis', 'Tritão', 'Nereu', 'Nereida', 'Oceano', 'Ceto', 'Crio', 'Hipérion', 'Japeto', 'Coeus', 'Phoebe', 'Reia', 'Cronos', 'Urano', 'Gaia'
        ],
        'plantas': [
            'roseira', 'margarida', 'girassol', 'tulipa', 'lírio', 'orquídea', 'jasmim', 'violeta', 'azaléia', 'begônia', 'samambaia', 'palmeira', 'bambu', 'cacto', 'suculenta', 'hera', 'trepadeira', 'bromélia', 'cravo', 'crisântemo', 'hibisco', 'lótus', 'nenúfar', 'flamboyant', 'manacá', 'ipê', 'pau-brasil', 'eucalipto', 'cedro', 'mogno', 'jacarandá', 'sequóia', 'pinheiro', 'acácia', 'amoreira', 'figueira', 'oliveira', 'vinha', 'café', 'cacaueiro', 'canela', 'baunilha', 'alecrim', 'salsa', 'coentro', 'hortelã', 'tomilho', 'manjericão', 'orégano', 'sálvia', 'erva-doce', 'erva-cidreira', 'erva-mate', 'camomila', 'calêndula', 'lavanda', 'dente-de-leão'
        ],
        'paises':[
            'Afeganistão', 'África do Sul', 'Albânia', 'Alemanha', 'Andorra', 'Angola', 'Antígua e Barbuda', 
            'Arábia Saudita', 'Argélia', 'Argentina', 'Armênia', 'Austrália', 'Áustria', 'Azerbaijão',
            'Bahamas', 'Bahrein', 'Bangladesh', 'Barbados', 'Belarus', 'Bélgica', 'Belize', 'Benin', 
            'Butão', 'Bolívia', 'Bósnia e Herzegovina', 'Botsuana', 'Brasil', 'Brunei', 'Bulgária', 'Burkina Faso', 
            'Burundi', 'Cabo Verde', 'Camboja', 'Camarões', 'Canadá', 'Catar', 'Cazaquistão', 'Chade', 
            'Chile', 'China', 'Chipre', 'Colômbia', 'Comores', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Coreia do Norte', 
            'Coreia do Sul', 'Costa do Marfim', 'Costa Rica', 'Croácia', 'Cuba', 'Dinamarca', 'Djibuti', 'Dominica', 
            'Egito', 'El Salvador', 'Emirados Árabepaisess Unidos', 'Equador', 'Eritreia', 'Eslováquia', 'Eslovênia', 'Espanha', 
            'Estado da Palestina', 'Estados Unidos', 'Estônia', 'Eswatini', 'Etiópia', 'Fiji', 'Filipinas', 'Finlândia', 
            'França', 'Gabão', 'Gâmbia', 'Gana', 'Geórgia', 'Granada', 'Grécia', 'Guatemala', 'Guiana', 'Guiné', 
            'Guiné-Bissau', 'Guiné Equatorial', 'Haiti', 'Holanda', 'Honduras', 'Hungria', 'Iêmen', 'Ilhas Marshall', 
            'Índia', 'Indonésia', 'Irã', 'Iraque', 'Irlanda', 'Islândia', 'Israel', 'Itália', 'Jamaica', 'Japão', 
            'Jordânia', 'Kiribati', 'Kosovo', 'Kuwait', 'Laos', 'Lesoto', 'Letônia', 'Líbano', 'Libéria', 'Líbia', 
            'Liechtenstein', 'Lituânia', 'Luxemburgo', 'Macedônia do Norte', 'Madagascar', 'Malásia', 'Malawi', 'Maldivas', 
            'Mali', 'Malta', 'Marrocos', 'Maurícia', 'Mauritânia', 'México', 'Mianmar', 'Micronésia', 'Moçambique', 
            'Moldávia', 'Mônaco', 'Mongólia', 'Montenegro', 'Namíbia', 'Nauru', 'Nepal', 'Nicarágua', 'Níger', 'Nigéria', 
            'Noruega', 'Nova Zelândia', 'Omã', 'Palau', 'Panamá', 'Papua Nova Guiné', 'Paquistão', 'Paraguai', 'Peru', 
            'Polônia', 'Portugal', 'Quênia', 'Quirguistão', 'Reino Unido', 'República Centro-Africana', 'República Checa', 
            'República Dominicana', 'Romênia', 'Ruanda', 'Rússia', 'Samoa', 'San Marino', 'Santa Lúcia', 'São Cristóvão e Nevis', 
            'São Tomé e Príncipe', 'São Vicente e Granadinas', 'Seicheles', 'Senegal', 'Serra Leoa', 'Sérvia', 'Singapura', 
            'Síria', 'Somália', 'Sri Lanka', 'Suazilândia', 'Sudão', 'Sudão do Sul', 'Suécia', 'Suíça', 'Suriname', 
            'Tailândia', 'Tajiquistão', 'Tanzânia', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad e Tobago', 'Tunísia', 'Turcomenistão', 
            'Turquia', 'Tuvalu', 'Ucrânia', 'Uganda', 'Uruguai', 'Uzbequistão', 'Vanuatu', 'Vaticano', 'Venezuela', 
            'Vietnã', 'Zâmbia', 'Zimbábue'
        ]
        
    }
]

export default wordList

