package com.impelitsolutions.personaldiaryapp.common.exceptions;

public class PermissionAlreadyExistException extends RuntimeException {
    public PermissionAlreadyExistException(String message) {
        super(message);
    }
}
