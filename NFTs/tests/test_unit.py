from scripts.commonScripts import getAccount
from scripts.deploy import deploy
from web3 import Web3

def testMint():
    account = getAccount()
    contract = deploy()
    mintAmount = 1
    contract.mint(account, mintAmount, {"from" : account, "value" : Web3.toWei(0.001, "ether")})
    assert contract.getTotalSupply() == contract.getMintForOwner() + mintAmount

def testOwnerwallet():
    account = getAccount()
    contract = deploy()
    ownerTokens = contract.walletOfOwner(account)
    assert len(ownerTokens) == contract.getMintForOwner()