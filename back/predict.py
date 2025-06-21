import sys
import json
import joblib
import numpy as np


model = joblib.load('modelo_melhor.joblib')

def transformar_json(json_data):
  
    campos = ['preg', 'plas', 'pres', 'skin', 'insu', 'mass', 'pedi', 'age']
    entrada = [float(json_data.get(c, 0)) for c in campos]
    return np.array([entrada])

def transformar_args(args):
 
    entrada = [float(arg) for arg in args]
    return np.array([entrada])

if __name__ == '__main__':
    try:
        if len(sys.argv) == 2:
          
            input_json = json.loads(sys.argv[1])
            X = transformar_json(input_json)
        elif len(sys.argv) == 9:
           
            X = transformar_args(sys.argv[1:])
        else:
            raise Exception('Forneça um JSON único ou 8 argumentos individuais.')
        pred = model.predict(X)
        saida = {'predicao': int(pred[0])}
        print(json.dumps(saida))
    except Exception as e:
        print(json.dumps({'error': str(e)}))
        sys.exit(1)
