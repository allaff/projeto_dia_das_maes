import pyttsx3

# Inicializa o motor de síntese de voz
engine = pyttsx3.init()

# Texto que você quer converter
texto = "Esta é uma demonstração da biblioteca pyttsx3, que funciona offline."

# Altera a velocidade da fala (opcional)
rate = engine.getProperty('rate')
engine.setProperty('rate', rate - 50) # Deixa a fala um pouco mais lenta

# Altera o volume (opcional)
volume = engine.getProperty('volume')
engine.setProperty('volume', volume + 0.25) # Aumenta o volume

# Seleciona uma voz específica (opcional, depende das vozes do seu sistema)
voices = engine.getProperty('voices')
# Descomente a linha abaixo para ver as vozes disponíveis
# for voice in voices:
#     print(voice.id)
# engine.setProperty('voice', voices[0].id) # Exemplo de como selecionar a primeira voz

# Enfileira o texto para ser falado
engine.say(texto)

# Executa a fala
engine.runAndWait()