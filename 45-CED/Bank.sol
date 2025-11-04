//SPDX-License-Identifier:MIT

pragma solidity 0.8.30;

contract BankFed {
    // address payable  admin;

    mapping(address => uint256) public balanceCheck;

    function deposit() public payable {
        balanceCheck[msg.sender] += msg.value;
    }

    // function checkBalance() public view returns(uint256){
    //     return balanceCheck[msg.sender];
    // }
    function ethertowei(uint256 _aamt) public pure returns (uint256) {
        return _aamt * 10 ** 18;
    }

    function withdraw(uint256 _amt) public {
        require(
            balanceCheck[msg.sender] >= ethertowei(_amt),
            "Insufficient Balance"
        );
        balanceCheck[msg.sender] -= ethertowei(_amt);
        payable(msg.sender).transfer(ethertowei(_amt));
    }
}
