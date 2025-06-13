from datetime import datetime, timedelta
import pandas as pd

# Início do cronograma
start_date = datetime(2025, 5, 22)
post_types = ["Converter", "Relacionar", "Instruir", "Entreter", "Inspirar", "Livre", "Emocional"]

# Tópicos das postagens por dia (de 22/05 a 21/06) com base no plano aprovado
topics = [
    # Semana 1
    ("Instruir", "Evite prejuízos: como identificar se um iPhone está com problema de carregamento"),
    ("Entreter", "Cliente: ‘Só caiu na água rapidinho’ 😂"),
    ("Inspirar", "O que me fez não desistir da bancada – parte da minha história"),
    ("Livre", "Bastidores com vídeo rápido da rotina na bancada + teaser do que vem por aí"),
    ("Emocional", "Por que vale a pena seguir em frente, mesmo quando tudo trava"),
    # Semana 2
    ("Converter", "Esse detalhe pode revelar um defeito oculto no iPhone"),
    ("Relacionar", "Você já perdeu dinheiro por não saber isso no conserto?"),
    ("Instruir", "Tutorial básico: Como identificar curto em conector de carga"),
    ("Entreter", "Memes do técnico: “Quando o cliente diz que ‘já foi em outro lugar antes’”"),
    ("Inspirar", "Post de antes/depois de bancada ou aluno do curso"),
    ("Livre", "Reels de pitch rápido: “Por que trazer seu aparelho pra Nerd”"),
    ("Emocional", "Ser técnico é mais do que consertar: é devolver a vida ao aparelho (e à pessoa)"),
    # Semana 3
    ("Converter", "Chamada para a Mega Aula 'Você não precisa ser um gênio pra começar…'"),
    ("Relacionar", "Vídeo pessoal: 'Por que eu criei o Método Nerd'"),
    ("Instruir", "Corte da aula (spoiler técnico)"),
    ("Entreter", "AO VIVO: Mega Aula do Método Nerd"),
    ("Inspirar", "Você viu o que rolou na aula? Já começou o seu caminho?"),
    ("Livre", "Reels de bastidores da aula + depoimento"),
    ("Emocional", "Você é o seu maior projeto. Invista."),
    # Semana 4
    ("Converter", "Quer entrar no mundo do reparo agora? Veja como"),
    ("Relacionar", "Comentários reais de alunos + dúvida frequente"),
    ("Instruir", "Teste rápido com multímetro para detectar falha em trilha"),
    ("Entreter", "Bastidor: 'Técnico tentando fazer um orçamento sem saber o defeito 😅'"),
    ("Inspirar", "O dia em que um reparo salvou meu negócio"),
    ("Livre", "Tour da loja ou bancada com legenda envolvente"),
    ("Emocional", "O que me motiva todos os dias na Nerd"),
    # Semana 5
    ("Converter", "Promoção especial ou CTA direto para o curso"),
    ("Relacionar", "Você também começou do zero?"),
    ("Instruir", "Como usar o osciloscópio nos testes de circuito"),
    ("Entreter", "Meme técnico: “Quando você troca o conector e ainda não carrega”"),
    ("Inspirar", "Você é a diferença entre um técnico comum e um Nerd de verdade"),
]

# Geração do DataFrame
dates = [start_date + timedelta(days=i) for i in range(len(topics))]
df = pd.DataFrame({
    "Data": [date.strftime("%d/%m/%Y") for date in dates],
    "Tipo (CRIEI)": [t[0] for t in topics],
    "Tema da Postagem": [t[1] for t in topics],
    "Concluído": ["☐" for _ in topics]
})

import ace_tools as tools; tools.display_dataframe_to_user(name="Cronograma de Postagens Nerd Tecnologia", dataframe=df)