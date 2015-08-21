require('/node_modules/shelljs/global.js');

console.log('\n\n********* Executing cordova build *********\n\n');
exec('cordova build');
console.log('\n\n********* Success cordova build *********\n\n');

console.log('\n\n********* Sending app to Phone *********\n\n');
exec('adb -d install -r platforms/android/ant-build/CordovaApp-debug.apk');
console.log('\n\n********* Success sending app to Phone *********\n\n');