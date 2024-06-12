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
      4. android kurlumu. https://developer.android.com/studio?hl=tr den önce indirilir.sonra sürükle bırak yöntemiyle "android" ikonu "application" a sürüklenip bırakılacaktır.sonrakı adımlar ise windows takı gibi bilinen "next->finish" işlemleridir. kurulum bittikten sonra bir tane proje oluşturularak tool->SDK manager->SDK tool dan Android SDK build Tool dan 34.0.0,NDK nin tamamaı,Android SDK CommandLine Tool nin tamamı,CMake,.....ler seçilerek ek kurulum yapılacaktır.
      5. tekrar terminalda.  echo -e "export ANDROID_HOME=$HOME/Library/Android/sdk
                                      export PATH=$PATH:$ANDROID_HOME/emulator
                                      export PATH=$PATH:$ANDROID_HOME/platform-tools
                                      export PATH=$PATH:$ANDROID_HOME/tools
                                      export PATH=$PATH:$ANDROID_HOME/tools/bin
                                      ">>~/.zshrc
                                       // bu komut path ayarlarının kalıcı olarak kaydedilmesini sağlıyor.
                                       

   ios için:
      android takıne benzer bir işlem söz konusu, ekstra olarak xcode kurulması gerekiyor.https://apps.apple.com/us/app/xcode/id497799835?mt=12 den apple store hesabıyla inirilerek kurulumu yapılır ve bir tane proje oluşturarak simulator kurulur,çalıştırılıp test edilir. 



# React Native Proje Oluşturma
      seçilen klasörde:
	  npx react-native init MyProjeTest
      npm uninistall -g react-native-cli
	  npm inistall -g react-native-cli
      npm install -g react-native
	  bunlardan sonra xcode ile oluşan proje .xspacecode tan açılır ve signing & capabilities tab dan apple store'a kayıtlı olan kullanıcı tarafında oluşturulan ekip seçilir, bu aşama yerine getirilmediğinde proje başarıyla oluşamaz,build olmaz. 
      npx react-native doctor ve npx react-native run-ios//run-android

   denemek isteyenler varsa, verilen hataları commit olarak yazınız, ben cevaplamaya çalışıyım.
	  
	  
# React Native Camera Kütüphanesi Ekeleme
   React native projesi için cemara işlemi ile alakeli bir çok kütüphene üretilmiştir. mesala react-native-vision-camera,react-native-pick-image,react-native-camera,react-native-camera-kit...gibi. Biz react native camera denilen bir kütüphene üzerinde çalışacağız.
    npm install --save react-native-vector-icon react-native-camera
    cd ios & pod install & cd ..

android için:
 android/app/src/main/AndroidManifest.xml dosyasına  
<uses-permission android:name="android.permission.CAMERA"></uses-permission>
<uses-permission android:name="android.permission.RECORD_AUDIO"></uses-permission>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"></uses-permission>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"></uses-permission>
eklenecek.
android/app/build.gradle dosyasına
android { 
 ... 
 defaultConfig { 
  ... 
  missingDimensionStrategy 'react-native-camera', 'general' /* insert this line */
 }
} 
eklenecek.

ios için:
 ios/AwesomeCamera/Info.plist dosyasının <dict></dict> na
 <key>NSCameraUsageDescription</key><string>Your message to user when the camera is accessed for the first time</string>
 <key>NSPhotoLibraryAddUsageDescription</key><string>Your message to user when the photo library is accessed for the first time</string>
 <key>NSPhotoLibraryUsageDescription</key><string>Your message to user when the photo library is accessed for the first time</string>
 <key>NSMicrophoneUsageDescription</key><string>Your message to user when the microphone is accessed for the first time</string>
 eklenecek.

 test.js
 dosyasında:

# 
      
	  import React, {PureComponent} from 'react';
   	  import {RNCamera} from 'react-native-camera';
	  export default class App extends PureComponent {  constructor(props) {
  	  super(props);}
	  render() {
 	  return (
   	  <RNCamera 
     	  ref={ref => {
      	  this.camera = ref;
     	  }}
     	  captureAudio={false}
     	  style={{flex: 1}}
      	  type={RNCamera.Constants.Type.back}
      	  androidCameraPermissionOptions={{
       	  title: 'Kamera kullanmak için yetki ver',
       	  message: 'Kameranızı kullanmak için izninize ihtiyacımız var',
       	  buttonPositive: 'Tamam',
       	  buttonNegative: 'İptal',
     	 }} />
   	 );
  	}} 
   	
      
# React Native Mikrofon Kütüphanesi Ekleme
