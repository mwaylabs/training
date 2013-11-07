# KDRS Schulung
![M-Way Solutions](mwayconsulting_logo-big.png)

Christian Feser

M-Way Consulting<br />
Stresemannstr. 79<br />
70191 Stuttgart, Germany<br />
Telefon: +49 711 252548 00<br />
Fax: +49 711 252548 09<br />
E-Mail: <info@mwayconsulting.com>


![M-Way Consulting](mwaysolutions_logo-big.png)


M-Way Solutions<br />
Stresemannstr. 79<br />
70191 Stuttgart<br />
E-Mail: <info@mwaysolutions.com>

---

## Agenda
1. Vorstellung
2. Systemanforderungen
3. Native Packaging (Cordova)
    1. Cloud
    2. On Premise
    3. Cordova Plug-in einbinden
    4. Cordova im Detail
    5. Cordova Plug-in entwickeln
    6. Updates/Erfahrungswerte
5. Tools (Web Inspector)
    1. Chrome Web Inspector
    2. Safari
    3. Chrome mobile
    4. Weinre
    5. Cloud Dienste
6. Open Street Maps Präsentation
7. The-M-Project
8. Performance-Optimierungen - Live!
9. REST-APIs
    1. Basic Authentication
    2. OAUTH1.0A   
    3. OAuth2
    4. Sessions
    5. API Key
    6. Rails Beispiel
10. Weitere Themen

---

##Vorstellung

### Marco Hanowski
**Kontakt**

- Phone   +49 (0) 711-25254-600
- Fax     +49 (0) 711-25254-701
- Mail m.hanowski@mwaysolutions.com

**Vorgeschichte**

- Bachelor Medieninformatik in Furtwangen (HFU)
- Master Medieninformatik in Stuttgart (HdM)
- Bei M-Way seit 2010/2011

**Meine Aufgaben**

- Produktentwicklung [Vitamins](vitamins-crm.com)
- Frameworkentwicklung [The-M-Project](www.the-m-project.org)
- Kundenbetreuung 

---

### Jonathan Grupp
**Kontakt**

- Mail j.grupp@mwaysolutions.com

**Vorgeschichte**

- Bachelor Angewandte Informatik (DHBW Stuttgart)
- Bei M-Way seit dieser Woche

**Meine Aufgaben**

- Projekteentwickling
- Frameworkentwicklung [The-M-Project](www.the-m-project.org)

---

### Mathias Maier

**Kontakt**

- Mail m.maier@mwaysolutions.com

**Vorgeschichte**

- Bachelor Interakitve Medien (HS Augsburg)
- Bei M-Way seit dieser Woche

**Meine Aufgaben**

- Projekteentwickling
- Frameworkentwicklung [The-M-Project](www.the-m-project.org)

---

## Systemanforderungen

Diese Software ist hilfreich/erforderlich:

- git
- [Eclipse](http://developer.android.com/sdk/installing/index.html ) und/oder [Android Studio](http://developer.android.com/sdk/installing/studio.html)

- Android SDK + [Developer Tools](http://developer.android.com/tools/index.html)
- [Cordova SDK](http://cordova.apache.org/#download)
- Xcode
- [nodejs](http://nodejs.org/)
- [Espresso](https://github.com/mwaylabs/Espresso)
- [Chrome Browser](https://www.google.com/intl/en/chrome/browser/)

---

  	
## Native Packaging (Cordova)
### Cloud

##### The-M-Project App erstelllen
The-M-Project Beispiel erstellen

```
//Create
espresso init -p cloudtest -e
cd cloudtest
//Test
espresso server
open http://127.0.0.1:8000/cloudtes/index.html
//Build
espresso build
```

---

##### [Github](https://github.com/)
- Github repository erstellen: *cloudtest*
```
cd /tmp
git clone https://github.com/hano/cloudtest
cd cloudtest
```

##### Versionierung
```
cd cloudtest
git init
git remote add origin https://github.com/hano/cloudtest
git add .
git commit -m 'initial app'
git push origin master
```

---

##### [Cloud](https://build.phonegap.com/)
- App erstellen <https://build.phonegap.com/>
- Mit Github verbinden
- Build

---

##### Installation auf Android-Gerät
- Container Herunterladen: `PGBuildApp-debug.apk
- Gerät anschließen
- "Unknown Sources" aktivieren
- adb install PGBuildApp-debug.apk 

---

### On Premise

#### [Systemanforderungen](http://docs.phonegap.com/en/edge/guide_cli_index.md.html#The%20Command-line%20Interface)
- CLI
    - iOS (Mac)
    - Android (Mac, Linux)
    - BlackBerry 10 (Mac, Linux, Windows)
    - Windows Phone 7 (Windows)
    - Windows Phone 8 (Windows)
- Oder [Overview](http://docs.phonegap.com/en/edge/guide_overview_index.md.html#Overview)    
- Java
- nodejs
- npm
- ant

---

#### [Installation](http://docs.phonegap.com/en/edge/guide_cli_index.md.html#The%20Command-line%20Interface)


```
sudo npm install -g phonegap
or
sudo npm install -g cordova
```

Je nach installiertem Paket im folgenden entweder *cordova* oder *phonegap* als Befehl verwenden.

---

#### Android Projekt erstellen
```
//Create
cd /tmp
cordova create hello -n HelloWorld -i com.example.hello
cd hello/
//nur bei cordova mit Version 3.0
cordova platform add android
//Test
cordova run android
//Build
cordova build android
```

---

### Cordova Plug-in einbinden

```
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git
```


---

### Cordova im Detail

####Ordnerstruktur

```
|- src
| |-- io.cordova.hellocordova
| |  |-- HelloCordova.java
| |-- org.apache.cordova.plugins
| |  |-- Plugin_1.java
| |  |-- Plugin_2.java
|- assets
| |-- www
| |  |-- index.html
|- res
| |-- xml
| |  |-- config.xml

```

---

### Cordova Plug-in entwickeln

Ein Plugin besteht aus folgenden Teilen

- Native (Java,Objective-C, usw. )
    - execute
- HTML
    - cordova.js einbinden 
- JavaScript
    - cordova.exec aufrufen
- XML 
    - Registrierung

---

Der native Teil eines Plugins hat Zugriff auf Gerätespezifische Funktionen. Hierzu
zählen beispielsweise der Zugriff auf den aktuellen Standort. Cordova sieht sich
selbst als notwendiges Übel, bis der HTML5 Standart in alles Geräten einzog gehalten hat.

Um diese nativen Funktionen in einer Webanwendung anzusprechen, wird der native Teil durch die *cordova.js* verbunden. Diese Datei muss in der *index.html* eingebunden sein.

Sind alle Funktionen geladen wird `deviceready` getriggert. Auf dieses Event muss man sich im `document.ready` Event oder am Ende der *index.html* binden. Anschließend stehen über `navigator` alle Cordova Funktionen oder Plugins zur Verfügung. Man muss jedoch nicht zwingend `navigator` verwenden und kann z.B. direkt auf das `window` Objekt zugreifen.

Schnittstelle zwischen den nativen- und Web-Komponenten ist die `execute` Funktion in der nativen Umgebung und `cordova.exec` Funktion im JavaScript. Die `execute` hat als ersten Parameter einen String zum Identifizieren der gewünschten Funktion. 

`cordova.exec` wird Asynchron aufgerufen und erwartet als ersten Parameter einen Success-Callback, danach einen Error-Callback, den Java Class name und einen String zur Identifizierung.

---

#### #1 Echo Plugin (Android)
ausführliches/offizielles Beispiel:
<http://cordova.apache.org/docs/en/3.0.0/guide_platforms_android_plugin.md.html#Android%20Plugins>

---

##### Java

1. package erzeugen
    - org.apache.cordova.plugins
2. java class erzeugen
    - Echo.java
3. Echo erbt von `CordovaPlugin`
4. `@Overwrite` `execute`
5. Filter nach `action` String
6. Java Code ausführen

---

**Beispiel:**

```
public class Echo extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    	if (action.equals("echo")) {
            String message = args.getString(0);
            this.echo(message, callbackContext);
            return true;
        }
        return false;
    }
    private void echo(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
```

---

##### XML

Config.xml um ein *feature* unter *widget* erweitern.
*name* JavaScript Context
*value* entspricht dem Package und Classname

**Beispiel:**

```
<widget>
…
<feature name="Echo">
	    <param name="android-package" value="org.apache.cordova.plugins.Echo" />
	</feature>
…
</widget>
```

---

##### index.html

1. Cordova.js laden
2. wenn `document` zur Verfügung steht
    - deviceready binden
3. Nach dem `deviceready` Callback ist der Cordova Context verfügbar.

---

**Beispielcode index.html**

```
<head>
//Cordova Bridge
< script src="cordova.js"></script >
</head>
//Markup der Anwendung
<body>...</body>
//Document Ready

  document.addEventListener('deviceready', function(){
  	//Zugriff auf Cordova ist nun möglich
  }, false);
  
  <script>
  document.addEventListener('deviceready', function(){
  	//Zugriff auf Cordova ist nun möglich
  }, false);
</script>

```

---

##### JavaScript

**JavaScript Bridge**

Muss irgendwo im Context der index.html definiert sein.

```
window.echo = function(str, callback) {
			//nativer Aufruf
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };

```

---

**JavaScript Aufruf**

Kann nach dem event *onDeviceReady* ausgeführt werden.

```
window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
```

---

#### #2 Waiting Dialog Plugin (Android)

##### NPM orientiertes JavaScript Plugin

Vorteile:

- code wird durch Cordova in die WebApp eingefügt
- Plugins sind eigene Komponenten und von der Anwendung getrennt
- Somit leichter wiederverwendbar bzw. einfachere Implementierung wenn continous integration

Nachteile: 

- höherer Entwicklungsaufwand

---


##### Java

Implementierung ähnlich wie Beispiel 1. Konkrete Implementierung siehe Beispielcode.

1. package erzeugen
    - org.apache.cordova.plugins
2. java class erzeugen
    - WaitingDialog.java
3. `WaitingDialog` erbt von `CordovaPlugin`
4. @Overwrite *execute*
5. Filter nach *action* String
6. Java Code ausführen

```
package org.apache.cordova.plugins;
```

---

##### XML

```
<feature name="WaitingDialog">
	    <param name="android-package" value="org.apache.cordova.plugins.WaitingDialog" />
	</feature>
```
 
**Vorgehen**

1. In *assets/www/plugins/* einen Ordner für das Plugin erstellen. Am besten wie das dazugehörige Java Package
2. Darin einen *www* Ordner erstellen
3. Darin die eigentliche Plug-in Datei *WaitingDialog.js* erstellen.

---

**Plug-in Code**

1. ID vergeben
2. cordova exec (Bridge Funktionaliät) einbinden
3. JavaScript API definieren und entsprechende Java calls mit exec aufrufen
    - exec API: `exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);`
4. (opt.)Instanz erzeugen
5. Instanz an Cordova exportieren

---

**Beispielcode WaitingDialog.js**

```
//ID vergeben: "org.apache.cordova.plugins.WaitingDialog"
cordova.define("org.apache.cordova.plugins.WaitingDialog", function(require, exports, module) {

//cordova exec einbinden -> Bridge funktionalität
var exec = require('cordova/exec')

//Neues Obeject definieren	
function WaitingDialog() {
}

//Prototyp um Funktionalität erweitern
WaitingDialog.prototype.show = function(text) {
	var t = text || "default text";
	alert('function called');
	exec(null, null, "WaitingDialog", "show", [t]);
}

//Prototyp um Funktionalität erweitern
WaitingDialog.prototype.hide = function() {
	exec(null, null, "WaitingDialog", "hide", []);
}
//Instanz erzeugen
var wd = new WaitingDialog()

//Instanz an cordova exportieren
module.exports = wd;
});
```

---

**Beispielcode assets/www/cordova_plugins.js**

 
```
//cordova_plugins.js
cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
…
    {
        "file": "plugins/org.apache.cordova.WaitingDialog/www/WaitingDialog.js",
        "id": "org.apache.cordova.plugins.WaitingDialog",
        "clobbers": [
            "navigator.WaitingDialog"
        ]
    }
    …
]
});

```


---

### Updates/Erfahrungswerte

Für jedes Update wird auf der PhoneGap Webseite eine Anleitung zum Migrieren veröffentlicht. Ein automatisches Update ist nicht bekannt. Daher muss das Update manuell durchgeführt werden.

Updates gestallten sich schwierig. Sowohl CLI API als auch die Cordova XML/Java/JavaScript API unterscheiden sich, bei einem Versionswechsel, fast immer.

Theoretisch muss die libs/cordova.jar und die assets/cordova.js ausgetauscht werden.

In der Praxis hat es sich teilweise bewert ein neues Projekt aufzusetzen und die Dateien manuell in das neue Project zu integrieren.

Bei nicht alltäglichen Anforderungen lohnt es sich in den Sourcecode zu schauen. Teilweise sind Features noch nicht implementiert, nicht aktiv oder nicht ausreichend getestet. Falls dies der Fall ist kann ohne Probleme ein [Ticket](https://issues.apache.org/jira/browse/CB) erstellt werden oder der Bug selbst behoben werden: [Contribute to Cordova](http://cordova.apache.org/#contribute)

---

## Tools

### Chrome Web Inspector

Anleitung: <https://developers.google.com/chrome-developer-tools/docs/console>

Öffen mit: *cmd + alt + i* (Mac) oder *ctrl + shift + j* (Windows)

---

#### Menü

Das generelle Menü ist in die folgenden Einträge gegliedert. Durch drücken der *Esc*-Taste kann die Konsole dauerhaft angezeigt werden. Die folgende Auflistung ist keinesfalls komplett und listet die gängisten Funktionen auf.

---

##### Elements

- DOM untersuchen
- CSS untersuchen
- Events untersuchen

---


##### Resources

Zugriff auf die wichtigesten Elemente der Persistenzschicht.

- WebSQL
- Indexed DB
- Locale Storage
- Session Storage
- Cookies

---


##### Network

Übersicht über die komplette Netzwerkschicht.
Jeder Request/Response kann im Detail betrachtet werden.
Durch einen Rechtsklick auf Requests bekommt man weitere nützliche Tools wie beispielsweise *copy as cURL*

---

##### Sources

Der komplette Sourcecode der Anwendung ist erreichbar und über den Debugger erreichbar. Dieser steht klassischen Debuggern in nichts nach.

- Breakpoints
- Scope Variablen
- Console/Editor
- Call Stack

---

##### Timeline

Aufzeichnung von Memory Heap, Frames und Events.

---

##### Profiles

Momentaufnahmen zum Vergleichen von JavaScript CPU Auslastung, totalem Speicherverbrauch und Heap Snapshots

---

##### Audits

Zeigt Verbesserungswürdige Stellen im Code auf.

---

##### Console

JavaScript Interpreter und Ausgabe aller Fehler, Warnungen oder Informationen.

---

### Safari

Anleitung: <https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/DebuggingSafarioniPhoneContent/DebuggingSafarioniPhoneContent.html>

- Ab iOS > 6.0
- nur Safari (nicht Webview!)
- Safari muss Entwickler Ansicht aktiviert haben
- *Safari > Preferences > Advanced > Show Develop in menu  bar*
- nur über USB
- Angeschlossene Geräte erscheinen automatisch unter dem Menübunkt *Develop*

---

### Chrome mobile

Anleitung: <https://developers.google.com/chrome-developer-tools/docs/remote-debugging>

- Ab Android > 4.0
- nur Google Chrome Browser (nicht Webview!)
- adb tools müssen installiert sein
- Entwicklungsrechner: `adb forward tcp:9222 localabstract:chrome_devtools_remote`
- Chrome:
    - *Settings > Applications > Development*
    - *Settings > Developer*
    - wenn nicht sichtbar: 7x auf *Settings -> About Phone* drücken
- nur über USB
- Entwicklertools über <http://localhost:9222> ereichbar 

---

### Weinre
weinre: **WE**b **IN**spector **RE**mote
<http://people.apache.org/~pmuellr/weinre/docs/latest/>

Nütlich für:

- Geräten die nicht über USB angeschlossen werden können
- WebApps in Containern
- Android Version < 4.0
- iOS Version < 6.0

---

#### Installation
```
sudo npm -g install weinre
```

---

#### Konfiguartion
##### Server
Pfad: `~/.weinre/server.properties`

```
boundHost:    -all-
httpPort:     8081
reuseAddr:    true
readTimeout:  1
deathTimeout: 5
````
##### Client
Script mit: `<script src="http://a.b.c:8081/target/target-script-min.js"></script>` laden.

IP an Server anpassen.

---

#### Debuggen
```
//weinre Server starten weinre [options]
weinre
//weinre Client im Browser öffnen
open http://10.21.7.244:8081/client/
```

---

### Cloud Dienste
- Crash Reports für iOS, Android und Web.
- Bei Container Apps kann sowohl der Container als auch die Webanwendung reporten

**crittercism: **
<https://www.crittercism.com/>

**JSLogger: **
<http://jslogger.com/>

---

## [Open Street Maps Präsentation](http://slid.es/mtm/open-street-maps)

---

## The-M-Project

---

### m_require

m_require ist eine Anweisung für den Build-Prozess in Espresso.
Der Build-Prozess der Anwendung erstellt aus dem Framework-Ordner die *core.js* und *ui.js*.
Hierzu werden die einzelnen Dateien aus dem Core-Ordner bzw. UI-Ordner untereinander in die
jeweilige Datei kopiert.

Ähnlich verhält es sich bei der Applikation. Die Ordner *controllers*, *models*, *resources* 
und *views* werden einzeln untereinander eingefügt und eine Datei erstellt. Da beim Laden der
Dateien der Sourcecode direkt interpretiert wird, müssen Objekte von denen geerbt wird früher interpretiert werden als ihre Kinder. Ein Beispiel:

---

```
M.View = M.Object.extend({…});
M.ButtonView = M.View.extend({…});
M.RedButtonView = M.ButtonView.extend({…});
```

---

M.View muss vor M.ButtonView interpretiert werden, jedoch vor der M.RedButtonView. Wäre die
Reihenfolge eine andere würde der JavaScript Interpreter einen Fehler werfen.

Für die Bestimmung der Reihenfolge gibt es verschiedene Ansätze. Das *Grunt*-Tool verwendet hierfür den Befehl `// @include ./core/m.js`. Die Anweisung muss durch ein Kommentar gekennzeichnet werden, da `@include` kein valides JavaScript ist. 

`m_require('core/m.js')` ist ein JavaScript Funktionsaufruf und somit valides JavaScript. Die Funktion übernimmt dabei jedoch keine Aktion, sondern dient nur dazu valides JavaScript zu erzeugen.

Durch einen RegEx im Build-Prozess wird `m_require` gesucht und der übergebene String gefiltert. 
Der String representiert eine Datei deren Inhalt anschließend kopiert wird.

Da die Anweisung keine Auswirkung auf das JavaScript hat, sondern nur durch einen RegEx interpretiert wird, hat ein Auskommentieren der Funktion keine Wirkung.

---

### Q&A

##### Pagerefresh
Manche TMP-Eigenarten finden wir problematisch bzw. schwer nachvollziehbar (z.B. m_require, Pagerefresh erst nach Displayberuehrung sichtbar, …)

---

## The-M-Projct v.2.0

Ältere Versionen wurden bisher von Panacoda und M-Way Solutions gemeinsam verwaltet. Panacoda hat sein Geschäftsfeld seit kurzem geändert und vermarktet sich nun unter M-Way Consulting. Durch diese Umstruckturierung hat die Entwicklung der aktuellen Version, wie auch die Pflege der
Webseite ein wenig gelitten. Jedoch wird in den nächsten Wochen eine Ankündigung von Version 2, 
wie auch eine Roadmap folgen.

Die neue Version besteht hauptsächlich aus zwei Teilen. Einer Synchronisations-Library (codename bikini) und dem Frontend. 

---

## Performance-Optimierungen - Live!

Die Ladezeiten der Apps sind schon sehr lang (~ 20 Sekunden bei Erstaufruf)

---

## REST-APIs
<http://jsonapi.org/>
<https://developers.google.com/accounts/docs/OAuth2Login>

---

### Basic Authentication
Base64 Header bzw. Browser alert

---

### OAUTH1.0A

---

### OAuth2

---

### Sessions
- Login Request
- Session Return
    - Cookie
    - Token 

---

### API Key
- Persistent
- Achtung JavaScript
    - Plugin
    - Nativer Container

---

### Rails Beispiel
```
cd /tmp
rails new blogengine
cd /blogengine
rails g scaffold posts title:string content:text author:string
rake db:create
rake db:migrate
rails s
open http://localhost:3000
```

```
curl localhost:3000/posts/new -H 'Accept: application/json'
curl localhost:3000/posts/new.json


curl localhost:3000/posts -H 'Accept: application/json'
curl localhost:3000/posts.json

curl http://localhost:3000/posts -H 'Content-Type: application/json' -H 'Accept: application/json' --data-binary $'{\n    "author": "Marco",\n    "content": "Hello Content",\n    "title": "Hello Title"\n}'
```

---

## Weitere Themen

---

### Javascript !Browser
#### node.js

JavaScript Engine
<http://nodejs.org/>

#### NPM

Node Package Manager
<https://npmjs.org/>

#### dynjs

Java 7 Nodejs Implementierung

<http://dynjs.org/>

#### Nashorn
Java 8 JavaScript Implementierung
<https://blogs.oracle.com/nashorn/entry/welcome_to_the_nashorn_blog>

---

### Webentwicklung heute

---

#### Bower

Bower is a package manager for the web

<http://bower.io/>

---

#### Grunt

The JavaScript Task Runner

<http://gruntjs.com/>

---

###Am laufenden bleiben

---

# Developer Rockstars Google+/Twitter
- **Addy Osmani** Creator of Yeoman, TodoMVC, Aura & more [@addyosmani](https://twitter.com/addyosmani)

- **Paul Irish** Chrome dev, CSS please, Boilerplate [@paul_irish](https://twitter.com/addyosmani)

- **David Walsh** Mozilla Web Developer, MooTools Core Developer [@davidwalshblog](https://twitter.com/davidwalshblog)

- **Steve Souders** web performance engineer [@Souders](https://twitter.com/souders)

- **Andre Jay Meissner** Web worker[@klick_ass](https://twitter.com/souders)

- **Jan Lehnardt** @CouchDB • @jsconfeu • @hoodiehq [@janl](https://twitter.com/janl)

- **Christian Heilmann** Mozilla Developer Evangelist [@codepo8](https://twitter.com/codepo8)

- **John Resig** @jeresig Creator of @jquery [@jeresig](https://twitter.com/jeresig)

- **Divya Manian** CSS please, Boilerplate [@divya](https://twitter.com/divya)

- **Nicholas C. Zakas** ex YUI Developer [@slicknet](https://twitter.com/slicknet)

- **Vincent Hardy** Adobe Webstandards [@vincent_hardy](https://twitter.com/vincent_hardy)

- **xnoɹǝʃ uɐıɹq** Apache Cordova, Adobe Phonegap [@brianleroux](https://twitter.com/brianleroux)

- **Dion Almaer** [@dalmaer](https://twitter.com/dalmaer)

- **Jeff Atwood** [@codinghorror](https://twitter.com/codinghorror)

- **Šime Vidas** webplatformdaily.org [@simevidas](https://twitter.com/simevidas)

- **Sindre Sorhus** Grunt, Yeoman, Bower [@sindresorhus](https://twitter.com/sindresorhus)

- **Nicole Sullivan** Speaker [@stubbornella](https://twitter.com/stubbornella)

- **Jeremy Keith** Speaker [@adactio](https://twitter.com/adactio)

- **Jake Archibald** Googler, Speaker [@jaffathecake](https://twitter.com/jaffathecake)

- **Ben Alman** Creator of @gruntjs [@cowboy](https://twitter.com/cowboy)

- **Mathias Bynens** Boilerplate [@mathias](https://twitter.com/mathias)

- **Nicolas Gallagher** Software Engineer @twitter [@necolas](https://twitter.com/necolas)

- **Chris Coyier** css-tricks.com [@chriscoyier](https://twitter.com/chriscoyier)‏

- **Brad Frost** Speaker [@brad_frost](https://twitter.com/brad_frost)‏

- **Lea Verou** Speaker, @dabblet [@LeaVerou](https://twitter.com/LeaVerou)‏

###German Guys

- **Christian Schaefer** @workingdraft [@derSchepp](https://twitter.com/derSchepp)

- **Anselm Hannemann** [@helloanselm](https://twitter.com/helloanselm)

- **Peter Kröner** @workingdraft HTML5-Buchautor, "Erklärbär" [@sir_pepe](https://twitter.com/sir_pepe)

- **Stefan Baumgartner** @workingdraft [@ddprrt](https://twitter.com/ddprrt)

- **Sebastian Golasch** Speaker, @dalekjs ‏[@asciidisco](https://twitter.com/asciidisco)

- **Rodney Rehm** Speaker Created URI.js [@rodneyrehm](https://twitter.com/rodneyrehm)

- **Hans Christian Reinl** Boilerplate [@drublic](https://twitter.com/drublic)

- **Frederic Hemberger** @cgnjs [@fhemberger](https://twitter.com/fhemberger)

- **Kahlil Lechelt** [@distilledhype](https://twitter.com/distilledhype)‏

---

#Podcasts

- **Workingdraft** German Weekly Podcast about Web-Development <http://workingdraft.de/>

- **Vier Diskusionen** German Weekly Pocast about the Web (not only for Developers) <http://vier.fm/diskussionen/>


- **Shoptalk** Weekly Pocast with Chris Coyier <http://shoptalkshow.com/>

- **Javascript Jabber** Javascript Podcast <http://javascriptjabber.com/>


---

# News/Blogs

- **Hackernews mobile** <http://ihackernews.com/new>

- **Hackernews desktop** <https://news.ycombinator.com/>

- **Twitter Developer Blog** <https://dev.twitter.com/blog>

- **Airbnb Engineering** <http://nerds.airbnb.com/>

- **Open Web Platform Daily Digest** <http://webplatformdaily.org/>

- **A List Apart** <http://alistapart.com/>

- **CSS-Tricks** <http://css-tricks.com/>

- **HTML5-Bookmarks** <http://html5bookmarks.com/>

- **Smashing Magazine** <http://www.smashingmagazine.com/>


---

#Newsletter

- **HTML5 Weekly** <http://html5weekly.com/>

- **JavaScript Weekly** <http://javascriptweekly.com/>

- **Web Development Reading List** <http://wdrl.helloanselm.com/>

- **Web Tools Weekly** <http://webtoolsweekly.com/>

---

#Resources
- **Collection Web-Resources** <http://uptodate.frontendrescue.org/>

----

## Anhang
- Eclipse Project des Cordova Beispiels

---

## Impressum
<br />
![M-Way Consulting](mwaysolutions_logo-big.png)<br />

M-Way Solutions GmbH

Stresemannstr. 79<br />
70191 Stuttgart<br />

Telefon +49 (0)711-25254-627<br />
Telefax +49 (0)711-25254-701<br />

**Geschäftsführer:**
Volker Hahn, Richard Malley, 
Tom Metzger, Peter Necheles 

**Sitz/Registergericht** Stuttgart HRB 25158 <br />
**St.-Nr.:** 99043/02990 <br />
**UST-ID:** DE240271880	Landesbank Baden-Württemberg <br />
**Konto** 2516080  •  **BLZ** 600 501 01 <br />
**IBAN:** DE41 6005 0101 0002 5160 80 <br />
**SWIFT:** SOLA DE ST<br />

**E-Mail:** info@mwaysolutions.com <br />
**Internet:** http://www.mwaysolutions.com


---





