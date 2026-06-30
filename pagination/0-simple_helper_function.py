#!/usr/bin/env python3
"""
Helper function for simple offset-based pagination.
"""

def index_range(page: int, page_size: int) -> tuple:
    """
    Return a tuple fo (start_index, end_indes) for the given page/page_size.
    """
    start = (page -1) * page_size #Convert 1-indexed page to 0-indexed offset
    end = start + page_size
    return (start,end)
