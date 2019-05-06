/*Task
Create a node module that exports a function allowing sending sms through Sparrow SMS API 
(https://sparrowsms.readthedocs.io/en/latest/documentation/)
The module should use axios for http requests.
*/

const sms = require('./sms'); // this is the module you are supposed to write and can be used in a manner below
	
// e.g. config needed for the sms connection
const connConfig = {
	from: 'Demo',
	url: 'http://api.sparrowsms.com/v2/sms/',
	token: 'bSHpjHSP8Ux9KmWuigWC'
};

const smsConn = sms(connConfig); // one time configuration, then smsConn can be used to send messages

function sendSmsTo(phoneNo, message) {
		// validate phoneNo, if invalid reject. Validate message is not empty
		if (message=='') throw 'Message field is empty!';
		if (isNaN(phoneNo) || phoneNo.length != 10) throw 'Enter valid phone number!';
		return smsConn.send(phoneNo, message); // send is an async function
}