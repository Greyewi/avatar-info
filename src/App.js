import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VK from 'vk-openapi';
import Divider from 'material-ui/Divider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


var id = null;




class App extends Component {

  componentDidMount() {
    VK.init({
      apiId: 5833652
    });
  
    VK.Auth.login(function(response) {
      if (response.session) {
        console.log(response.session.user);
        document.getElementsByClassName('App-h2')[0].innerHTML = 'Привет '+response.session.user.first_name;
         document.getElementsByClassName('App-intro')[0].innerHTML ='<br> Твое имя: '+response.session.user.first_name + 
         '<br> Фамилия: '+ response.session.user.last_name +
         '<br> Ник: '+ response.session.user.nickname +
         '<br> Адрес твоей страницы: '+ '<a href="'+response.session.user.href+'">'+response.session.user.href+'</a>';
         id = response.session.user.id;
         console.log(id);
        if (response.settings) {
          console.log('option');
        }
      } else {
        console.log('false');
      }
    });
      setTimeout(function() {
        VK.Api.call('users.get', {user_ids: id, fields: 'bdate'}, function(r) {
        if(r) {
          console.log(r);
        }
      }); 
        VK.Api.call('users.get', {user_ids: id, fields: 'sex'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
        VK.Api.call('users.get', {user_ids: id, fields: 'city'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      }, 1000); 
      setTimeout(function() {
        VK.Api.call('users.get', {user_ids: id, fields: 'city'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'country'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'photo_max'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      }, 2000);   
      setTimeout(function() {
        VK.Api.call('users.get', {user_ids: id, fields: 'city'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'country'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'photo_max'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      }, 3000);
      setTimeout(function() {
        VK.Api.call('users.get', {user_ids: id, fields: 'city'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'country'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'photo_max'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      }, 4000);
      setTimeout(function() {
        VK.Api.call('users.get', {user_ids: id, fields: 'has_mobile'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'contacts'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'education'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      }, 5000);
      setTimeout(function() {
        VK.Api.call('users.get', {user_ids: id, fields: 'universities'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'schools'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'relation'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      }, 6000); 
    setTimeout(function() {
      VK.Api.call('users.get', {user_ids: id, fields: 'counters'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'exports'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'relatives'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
    }, 7000);
    setTimeout(function() {
      VK.Api.call('users.get', {user_ids: id, fields: 'interests'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'movies'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'tv'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
    }, 8000);
    setTimeout(function() {
      VK.Api.call('users.get', {user_ids: id, fields: 'books'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'games'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
      VK.Api.call('users.get', {user_ids: id, fields: 'about'}, function(r) {
        if(r) {
          console.log(r);
        }
      });
    }, 9000);
}
  render() {

    const TableExampleSimple = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-h2">Welcome to React</h2>
        </div>
        <p className="App-intro">
        {TableExampleSimple}
        </p>
      </div>
    );
  }
}

export default App;
