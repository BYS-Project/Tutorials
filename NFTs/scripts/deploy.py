from scripts.commonScripts import getAccount
from brownie import NFT_Contract

def deploy():
    name = "SoulPass"
    symbol = "PASS"
    uri = "https://..."
    account = getAccount()
    contract = NFT_Contract.deploy(name, symbol, uri, {"from" : account})
    return contract

def main():
    deploy()