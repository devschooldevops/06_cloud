from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    team_info = {
        'team_name': '[team name]',
        'adjective': '[cool / awesome / smecherie / etc]',
        'foods': ['[food 1]', '[food 2]', '[food 3]'],
        'drinks': ['[drink 1]', '[drink 2]', '[drink 3]'],
        'name': '[nume]'
    }
    return render_template('index.html', **team_info)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
