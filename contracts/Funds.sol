// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
/**
   * @title ContractName
   * @dev ContractDescription
   * @custom:dev-run-script Bank
   */

contract funds {
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }

Memo[] memos;
address payable owner;
constructor(){
    owner = payable(msg.sender);
}
function givefund(string memory name,string memory message) public payable{
    require(msg.value>0,"Please pay a valid amount");
    owner.transfer(msg.value);
    memos.push(Memo(name,message,block.timestamp,msg.sender));
}
function getMemos() public view returns(Memo[] memory){
return memos;
}
}