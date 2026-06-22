import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AdminService } from '../../application/admin.service.js';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('users')
  async listUsers(@Query() query: unknown) {
    return this.adminService.listUsers(query);
  }

  @Post('disputes/:id/resolve')
  async resolveDispute(@Param('id') id: string, @Body() payload: unknown) {
    return this.adminService.resolveDispute(id, payload);
  }
}
