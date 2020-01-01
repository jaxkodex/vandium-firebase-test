To run this project with sam:

1. Create a env.json that contains the env variables

```
{
    "TheFunction": {
        "FIREBASE_CREDENTIALS": "<<firebase_credentials.json>>",
        "FIREBASE_DATABASE": "<<firebase_database_url>>"
    }
}
```

2. Run the project
```
sam build
cp <<firebase_credentials.json>> ./.aws-sam/build/TheFunction/
sam local invoke -e events/testme.event.json --env-vars env.json
```