import { describe, it, expect } from 'vitest';
import { reportingserviceOp0, runReportingServicePipeline } from '../src/services/ReportingService.js';

describe('ReportingService', () => {
  it('processes line items and runs sequential pipeline', async () => {
    const op = await reportingserviceOp0({ items: [{ qty: 2, rate: 15 }] });
    expect(op.success).toBe(true);
    const pipe = await runReportingServicePipeline([{ items: [{ qty: 1, rate: 20 }] }], {});
    expect(pipe.log).toHaveLength(1);
    expect(pipe.log[0].success).toBe(true);
  });
});
