package com.impelitsolutions.personaldiaryapp.dairy.web.controller;

import com.impelitsolutions.personaldiaryapp.common.constants.AccessApiConstant;
import com.impelitsolutions.personaldiaryapp.dairy.constants.DairyConstant;
import com.impelitsolutions.personaldiaryapp.dairy.services.DairyService;
import com.impelitsolutions.personaldiaryapp.dairy.web.dto.request.DairyRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(AccessApiConstant.PRIVATE + DairyConstant.DAIRIES)
public class DairyController {

    private final DairyService dairyService;

    @PostMapping()
    public ResponseEntity<?> saveNewDairy(@RequestBody DairyRequest dairyRequest) {
        return ResponseEntity.ok(dairyService.save(dairyRequest));
    }

    @GetMapping()
    public ResponseEntity<?> getDairies() {
        return ResponseEntity.ok(dairyService.getDairies());
    }

    @PutMapping("/{uuid}")
    public ResponseEntity<?> updateDairy(@PathVariable("uuid") String uuid, @RequestBody DairyRequest dairyRequest) {
        return ResponseEntity.ok(dairyService.updateDairy(uuid, dairyRequest));
    }

    @GetMapping("/{uuid}")
    public ResponseEntity<?> getDairyByUuid(@PathVariable("uuid") String uuid) {
        return ResponseEntity.ok(dairyService.getDairyByUuid(uuid));
    }

    @DeleteMapping("/{uuid}")
    public void deleteDairy(@PathVariable("uuid") String uuid) {
         dairyService.deleteDairy(uuid);
    }

}

