int led = D0;
int ledState = 0;
int toggleLight(String args)
  {
    if(ledState == 1)
    {
        digitalWrite(led, LOW);
        ledState = 0;
    } else {
        digitalWrite(led, HIGH);
        ledState = 1;
    }
  return ledState;
  }

void setup() {
  pinMode(led, OUTPUT);
  Spark.variable("lights", &ledState, INT);
  Spark.function("toggleLight", toggleLight);
}

void loop() {
    if(ledState==TRUE)
    {
     digitalWrite(led, HIGH);

    }
    else
    {
    digitalWrite(led, LOW);
    }
    delay(1000);
}

