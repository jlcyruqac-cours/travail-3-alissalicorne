from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
@app.route('/')
def index():
	return render_template('accueil.html')

@app.route('/horoscope', methods=['POST'])
def horoscope():
    prenom = request.form['prenom']
    nom = request.form['nom']
    date = request.form['date']
    if prenom and nom and date:
        return jsonify({'prenom' : prenom,
                        'nom' : nom,
                        'date' : date})
    else:
        donnees_manquantes = ""
        if not prenom:
            donnees_manquantes = donnees_manquantes + "prenom; "
        if not nom:
            donnees_manquantes = donnees_manquantes + "nom; "
        if not date:
            donnees_manquantes = donnees_manquantes + "date; "
    return jsonify({'erreur' : 'Les donnees manquantes sont: ' + donnees_manquantes})

if __name__ == '__main__':
	app.run(debug=True)