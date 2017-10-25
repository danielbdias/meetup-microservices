# This is the script that initialize the backend code

# dependencies
echo Installing dependencies...

pip install -r requirements.txt

echo Dependencies installed

# run app
echo Running app...

python -u run_app_dev.py
