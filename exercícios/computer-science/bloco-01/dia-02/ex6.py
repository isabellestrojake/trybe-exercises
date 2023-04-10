import json


with open("pokemons.json") as file:
    content = file.read()
    pokemons = json.loads(content)["results"] 


if __name__ == "__main__":
  print(pokemons[346])
