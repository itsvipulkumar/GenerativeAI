from gtts import gTTS

def text_to_audio(text, filename):
    tts = gTTS(text=text, lang='en')
    tts.save(filename)
    print("Audio saved as {filename}")

# Example usage
text = "Certainly! Here's an example of Python code using the gTTS (Google Text-to-Speech) library to convert text to audio. In this example, we'll write a function that takes a text input and saves it as an audio file in the WAV format."
filename = "output.wav"
text_to_audio(text, filename)
