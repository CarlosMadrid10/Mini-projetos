import random

total_de_paradas = 20
total_de_passageiros_transportados = 0
total_de_passageiros_presentes = 0
limite_pessoas_sentadas = 40
limite_pessoas_em_pe = 20
limite_pessoas_onibus = limite_pessoas_sentadas + limite_pessoas_em_pe
embarque = 0
desembarque = 0
parada = 0
onibus = [
    [0],  # Pessoas sentadas | Sublista 0, índice 0
    [0]  # Pessoas em pé | Sublista 1, índice 0
]


def subir():
    global embarque
    global onibus
    global total_de_passageiros_transportados
    global total_de_passageiros_presentes
    global parada
    embarque = random.randint(1, 10)
    if parada == 1:
        print(f"Chegou na parada {parada}\nLotação inicial: {total_de_passageiros_presentes}")
        total_de_passageiros_presentes = embarque
        onibus[0][0] = total_de_passageiros_presentes
        total_de_passageiros_transportados = onibus[0][0]
        print(f"Subiram: {embarque}\nLotação final: {total_de_passageiros_presentes}")
        print(f"Pessoas sentadas: {onibus[0][0]}")
        print(f"Pessoas em pé: {onibus[1][0]}")
        print(f"Saiu da parada {parada}\n")

    elif 1 < parada < total_de_paradas:
        print(f"Chegou na parada {parada}")
        print(f"Lotação inicial: {total_de_passageiros_presentes}")
        descer()
        total_de_passageiros_presentes += embarque
        total_de_passageiros_transportados += embarque
        if limite_pessoas_sentadas < total_de_passageiros_presentes < limite_pessoas_onibus:
            onibus[0][0] = limite_pessoas_sentadas
            onibus[1][0] = total_de_passageiros_presentes - limite_pessoas_sentadas
            print(f"Subiram: {embarque}\nLotação final: {total_de_passageiros_presentes}")
        elif 0 < total_de_passageiros_presentes <= limite_pessoas_sentadas:
            onibus[0][0] = total_de_passageiros_presentes
            onibus[1][0] = total_de_passageiros_presentes - total_de_passageiros_presentes
            print(f"Subiram: {embarque}\nLotação final: {total_de_passageiros_presentes}")
        elif total_de_passageiros_presentes >= 60:
            onibus[0][0] = limite_pessoas_sentadas
            onibus[1][0] = limite_pessoas_em_pe
            print(f"Subiram: {embarque}\nLotação final: {total_de_passageiros_presentes}")
            print(f"Ônibus lotado!")
            if total_de_passageiros_presentes > 60:
                embarque -= (total_de_passageiros_presentes - limite_pessoas_onibus)
                print(f"Subiram: {embarque}\nLotação final: {limite_pessoas_onibus}")
                print(f"{total_de_passageiros_presentes - limite_pessoas_onibus} não puderam entrar.")
                total_de_passageiros_transportados -= (total_de_passageiros_presentes - limite_pessoas_onibus)
                total_de_passageiros_presentes = limite_pessoas_onibus

        print(f"Pessoas sentadas: {onibus[0][0]}")
        print(f"Pessoas em pé: {onibus[1][0]}")
        print(f"Saiu da parada {parada}\n")


def descer():
    global desembarque
    global onibus
    global total_de_passageiros_presentes
    global total_de_passageiros_transportados
    global parada
    desembarque = random.randint(1, 10)
    if 1 < parada < 20:
        if total_de_passageiros_presentes >= desembarque:
            total_de_passageiros_presentes -= desembarque
            print(f"Desceram: {desembarque}")
            if total_de_passageiros_presentes == 0:
                print("Ônibus vazio!")
        else:
            print(f"Desceram: {total_de_passageiros_presentes}")
            onibus[0][0] = total_de_passageiros_presentes - total_de_passageiros_presentes
            onibus[1][0] = onibus[0][0]
            total_de_passageiros_presentes -= total_de_passageiros_presentes
            print("Ônibus vazio!")
    elif parada == 20:
        print(f"Chegou na parada final\nLotação inicial: {total_de_passageiros_presentes}")
        print(f"Pessoas sentadas: {onibus[0][0]}")
        print(f"Pessoas em pé: {onibus[1][0]}")
        onibus[0][0] -= onibus[0][0]
        onibus[1][0] -= onibus[1][0]
        print(f"Desceram: {total_de_passageiros_presentes}")
        total_de_passageiros_presentes -= total_de_passageiros_presentes
        print(f"Lotação final: {total_de_passageiros_presentes}")
        if total_de_passageiros_presentes == 0:
            print("Todos os passageiros desceram.")
        else:
            print("Houve algum erro, nem todos os passageiros desceram. Ele pode estar dormindo no fundo do ônibus.")
        print(f"Total de passageiros transpotados: {total_de_passageiros_transportados}")


for parada_atual in range(1, total_de_paradas + 1):
    parada = parada_atual
    subir()
    if parada == 20:
        descer()
