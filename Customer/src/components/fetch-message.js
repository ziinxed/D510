import React from 'react';
import { StyleSheet, Text, View, TextInput,  Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

export default function fetch_message()
{
    const http = require('http');
    const init = {
        host: 'bba2kiilx5.execute-api.ap-northeast-2.amazonaws.com',
        path: '/week7test/fetch-message',
        port: 443,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const callback = function (response) {
        let result = Buffer.alloc(0);
        response.on('data', function (chunk) {
            result = Buffer.concat([result, chunk]);
        });

        response.on('end', function () {
            // result has response body buffer
            console.log(result.toString());
        });
    };

    const req = http.request(init, callback);
    const body = `{
                     "userName" : "D510"
                  }`;
    req.write(body);
    req.end();
}

axios({
    method: 'get',
    url: 'https://bba2kiilx5.execute-api.ap-northeast-2.amazonaws.com/week7test/fetch-message',
    data: {
        userName: 'DDD'
    }).then( response => { console.log(response) } );
})