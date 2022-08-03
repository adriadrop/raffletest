import { contractAddresses, abi } from "../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect, useState } from "react";
import { useNotification } from "web3uikit";
import { ethers } from "ethers";

export default function Enter() {
    const { enableWeb3, Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
    const chainId = parseInt(chainIdHex);
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null;

    const provider = await Moralis.enableWeb3();
    const raffleContract = new ethers.Contract(raffleAddress, abi, provider);

    return (
        <div className="p-5">
            {raffleContract }
        </div>
    );
}
