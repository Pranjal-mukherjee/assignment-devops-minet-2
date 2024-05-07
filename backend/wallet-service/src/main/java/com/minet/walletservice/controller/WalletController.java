package com.minet.walletservice.controller;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/wallets")
public class WalletController {

    private final WalletService walletService;

    @Autowired
    public WalletController(WalletService walletService) {
        this.walletService = walletService;
    }

    @PostMapping
    public ResponseEntity<WalletDTO> addWallet(@RequestBody WalletDTO walletDTO) {
        WalletDTO createdWallet = walletService.addWallet(walletDTO);
        return new ResponseEntity<>(createdWallet, HttpStatus.CREATED);
    }
    @GetMapping("/{userId}/{coinId}")
    public ResponseEntity<WalletDTO> getWalletByUserIdAndCoinId(@PathVariable int userId, @PathVariable int coinId) {
        WalletDTO walletDTO = walletService.getWalletByUserIdAndCoinId(userId, coinId);
        if (walletDTO != null) {
            return ResponseEntity.ok(walletDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping
    public ResponseEntity<WalletDTO> updateOrSaveWallet(@RequestBody WalletDTO walletDTO) {
        WalletDTO updatedWallet = walletService.updateOrSaveWallet(walletDTO);
        return new ResponseEntity<>(updatedWallet, HttpStatus.OK);
    }
}
