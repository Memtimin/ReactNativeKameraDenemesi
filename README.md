# React Native Macbook Kurulumu
   ilk önce sıfırlanmış mac cıhazı için brew denilen bir yükleme aracı yüklenecektir.
   
   sonrakı aşamalar https://reactnative.dev/docs/set-up-your-environment da söylendiği adımlar takıp edilecek. android ve ios için ayrı ayrı https://reactnative.dev/docs/set-up-your-environment?os=macos&platform=android ve https://reactnative.dev/docs/set-up-your-environment?os=macos&platform=ios larda detayli anlatılmıştır. mac cıhazında hem android hem ios aynı anda debug modda çalışabildiği için bu 2 adımın tamamı yerine getirilmesi tavsiye edilir.
   android için: 
   #
   		1. node kurulum.       brew install node@20
      2. watchman kurulumu.  brew install watchman
      3. JDK kurulumu.       brew install --cask zulu@17 
                            brew info --cask zulu@17  //yüklenmiş olan path i almak için.
                            /usr/libexec/java_home   //ayarlanmış olan java_home path ı öğrenmek için, jdk kulumundan önce norlamlde boş sonuç çıkacaktır.
      4. android kurlumu. https://developer.android.com/studio?hl=tr den önce indirilir.sonra sürükle birak yöntemiyle "android" ikonu "application" a sürüklenip bırakılacaktır.sonrakı adımlar ise windows takı gibi bilinen "next->finish" işlemleridir. kurulum bittikten sonra bir tane proje oluşturularak tool->SDK manager->SDK tool dan Android SDK build Tool dan 34.0.0,NDK nin tamamaı,Android SDK CommandLine Tool nin tamamı,CMake,.....ler seçilerek kurulumu yapılacaktır.
      5. tekrar terminalda.  echo -e "export ANDROID_HOME=$HOME/Library/Android/sdk
                                      export PATH=$PATH:$ANDROID_HOME/emulator
                                      export PATH=$PATH:$ANDROID_HOME/platform-tools
                                      export PATH=$PATH:$ANDROID_HOME/tools
                                      export PATH=$PATH:$ANDROID_HOME/tools/bin
                                      ">>~/.zshrc
                                       // bu komut path ayarlarının kalıcı olarak kaydedilmesini sağlıyor.
                                       

   ios için:
      android takine benzer bir durum söz konusu, ekstra olarak xcode kurulması gerekiyor.https://apps.apple.com/us/app/xcode/id497799835?mt=12 den apple store hesabıyla inirilerek kurulumu yapılır ve bir tane proje oluşturarak simulator kurulur,çalıştırılıp test edilir.



# React Native Proje Oluşturma
      seçilen klasörde:
	  npx react-native init MyProjeTest
      npm uninistall -g react-native-cli
	  npm inistall -g react-native-cli
      npm install -g react-native
	  bunlardan sonra xcode ile oluşan proje .xspacecode tan açılır ve signing & capabilities tab dan apple store a kayıylı olan kullanıcı tarafında oluşturulan ekip seçilir, bu aşama yerine getirilmediğinde proje başarıyla oluşamaz. 
      npx react-native doctor ve npx react-native run-ios//run-android

   denemek isteyenler varsa, verilen hataları commit olarak yazınız, ben cevaplamaya çalışıyım.
	  
	  
# React Native Camera Kütüphanesi Ekeleme

# React Native Mikrofon Kütüphanesi Ekleme
