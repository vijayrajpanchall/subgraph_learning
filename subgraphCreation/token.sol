// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Transfer {
    event TransferEvent (address _from, address _to, uint256 _value);
    event ChangeNameEvent (string _name);

    string public name = "Token";
    string public symbol = "TKN";
    uint public id = 1;

    function transfer(address payable to) public payable {
        to.transfer(msg.value);
        emit TransferEvent(msg.sender, to, msg.value);
    }
        
    function changeName(string memory _name) public {
        name = _name;
        emit ChangeNameEvent(_name);
    }

    function changeSymbol(string memory _symbol) public {
        symbol = _symbol;
    }

    function changeId(uint _id) public {
        id = _id;
    }

}