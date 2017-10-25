from afinn import Afinn
afinn = Afinn(emoticons=True)

def classifyText(text):
  score = afinn.score(text)

  if score > 1.0:
    return 'positive'
  elif score < -1.0:
    return 'negative'

  return 'neutral'
